import React from 'react';
import ReactCodemirror from './react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/scroll/simplescrollbars.css';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import classname from 'classname';
import { MODIFY, SAVE } from '../../constants';
import io from 'socket.io-client';

const { PureComponent } = React;

const options = {
    lineNumbers: true,
	mode: 'javascript',
    scrollbarStyle: 'simple'
}

export default class extends PureComponent {
    constructor(props, context) {
       
        super(props, context);
        this.options = {
            lineNumbers: true,
            mode: 'javascript',
            scrollbarStyle: 'simple'
        };

        this.state = {
            readOnly: true,
            changes: {
                from: {
                    line: 0,
                    ch: 0
                },
                to: {
                    line: 0,
                    ch: 0
                },
                text: [''],
                origin: 'setValue'
            }
        }

        this.onClick = this.onClick.bind(this);
        this.updateCode = this.updateCode.bind(this);
        this.socket = io();
    }

    componentWillReceiveProps(props) {
        const code = props.file.get('content');

        //如果redux里面的code 发生了改变，我们就更新editor里面的值，但是更新的方式不是简单的实用
        //setValue去做，因为那会reset光标的位置，所以这里我设置了origin 了标识这个操作时setValue，但是
        //其实他调用了codemirror的replaceRange方法
        if (code !== this.state.code) {
            this.setState({
                changes: {
                    from: {
                        line: 0,
                        ch: 0
                    },
                    to: {
                        line: 0,
                        ch: 0
                    },
                    text: [code],
                    origin: 'setValue'
                }
            });
        }
    }

    render() {
        this.options.readOnly = this.state.readOnly;

        return <div>
                  <div className="clearfix editor-toolbar__wrapper">
                      <Col sm={3} smOffset={9} className="editor-toolbar">
                        <Button bsSize="xs" bsStyle="primary" onClick={this.onClick}>
                            <i className={classname('icon', this.state.readOnly ? 'icon-pencil' : 'icon-floppy-disk')}/>
                            { this.state.readOnly ? MODIFY : SAVE }
                        </Button>
                      </Col>
                  </div>
                  <ReactCodemirror ref="editor" changes={ this.state.changes } onChange={ this.updateCode } options={this.options} className={classname(this.state.readOnly ? 'readonly' : '')}/>
               </div>
    }

    onClick() {
        let state = !this.state.readOnly;
        this.setState({
            readOnly: state
        }, () => {
            if (this.state.readOnly) {
                this.props.modifyContent(this.props.roomId, this.refs.editor.codeMirror.getValue())
                .then(({data:{code}}) => {
                    this.setState({
                        changes: {
                                from: {
                                    line: 0,
                                    ch: 0
                                },
                                to: {
                                    line: 0,
                                    ch: 0
                                },
                                text: [code],
                                origin: 'setValue'
                            } 
                    }, () => this.socket.emit('sync others', code));
                })
                .catch(() => {
                    this.props.loadContent(this.props.roomId);
                });
            }
        });
    }

    updateCode(newCode, changes) {
        this.socket.emit('push change', changes);
    }

    componentDidMount() {
        this.socket.on('connect', () => {
            //join the room
            this.socket.emit('join room', this.props.roomId);
        });

        //listen change
        this.socket.on('listen change', (changes) => {
            //因为这个地方时监听其他客户端的变化，然后再更新自己的editor，
            //所以我们需要改变origin的值为sync socket(我们预定origin为sync socket时候是同步其他编辑器的代码), 以达到更新editor的目的
            changes.origin = 'sync socket';

            this.setState({
                changes
            });
        });

        //because this is not called frequently, so we can broadcase the whole file content
        //just from my opinion.
        this.socket.on('sync redux', (latestCode) => {
           this.props.syncRedux(latestCode);
        });
    }

    componentWillUnmount() {
        this.socket.emit('leave room', this.props.roomId); 
        this.socket.disconnect();       
    }
}

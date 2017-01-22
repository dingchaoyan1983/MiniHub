import React from 'react';
import ReactCodemirror from './react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/scroll/simplescrollbars.css';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import classname from 'classname';
import { MODIFY, SAVE, VIEW_DIFF } from '../../constants';
import io from 'socket.io-client';
import {createPatch, applyPatch} from '../../utils';
import debounce from 'lodash.debounce';

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
            code: props.file.get('content'),
            lines: 0
        }

        this.onClick = this.onClick.bind(this);
        this.updateCode =  debounce(this.updateCode.bind(this), 0);
        this.socket = io();
    }

    componentWillReceiveProps(props) {
        const code = props.file.get('content');

        if (code !== this.state.code) {
            this.setState({
                code
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
                        {
                            //this.state.readOnly ? null : <Button bsSize="xs" bsStyle="primary" onClick={this.onClick}>推送</Button>
                        }
                      </Col>
                  </div>
                  <ReactCodemirror lines={this.state.lines} onChange={this.updateCode} value={this.state.code} options={this.options} className={classname(this.state.readOnly ? 'readonly' : '')}/>
               </div>
    }

    onClick() {
        let state = !this.state.readOnly;
        this.setState({
            readOnly: state
        }, () => {
            if (this.state.readOnly) {
                this.props.modifyContent(this.props.roomId, this.state.code)
                .then(({data:{code}}) => {
                    this.socket.emit('sync others', code);
                })
                .catch(() => {
                    this.props.loadContent(this.props.roomId);
                });
            }
        });
    }

    updateCode(newCode) {
        let patchs = createPatch(this.state.code, newCode);

        this.setState({
            code: newCode
        });
        
        this.socket.emit('push change', patchs);
    }

    componentDidMount() {
        this.socket.on('connect', () => {
            //join the room
            this.socket.emit('join room', this.props.roomId);
        });

        //listen change
        this.socket.on('listen change', ({patches, lines}) => {
            let newCode = applyPatch(this.state.code, patches);
           
            this.setState({
                code: newCode,
                lines
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


import React from 'react';
import ReactCodemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/scroll/simplescrollbars.css';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import classname from 'classname';
import { MODIFY, SAVE, VIEW_DIFF } from 'src/constants';
import CodeDiff from './code-diff';

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
            showDiff: false
        }

        this.onClick = this.onClick.bind(this);
        this.updateCode = this.updateCode.bind(this);
        this.showDiff = this.showDiff.bind(this);
        this.hideDiff = this.hideDiff.bind(this);
        this.loadHistory = this.loadHistory.bind(this);
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
                        <Button bsSize="xs" bsStyle="primary" onClick={this.showDiff} className="code-editor__diffbtn">
                            <i className="icon icon-copy"/>
                            { VIEW_DIFF }
                        </Button>
                        <Button bsSize="xs" bsStyle="primary" onClick={this.onClick}>
                            <i className={classname('icon', this.state.readOnly ? 'icon-pencil' : 'icon-floppy-disk')}/>
                            { this.state.readOnly ? MODIFY : SAVE }
                        </Button>
                      </Col>
                  </div>
                  <ReactCodemirror onChange={this.updateCode} value={this.state.code} options={this.options} className={classname(this.state.readOnly ? 'readonly' : '')}/>
                  <Modal dialogClassName="diff-view__modal" animation={false} show={this.state.showDiff}>
                        <Modal.Header closeButton={true} onHide={this.hideDiff}>
                            <Modal.Title>对比</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CodeDiff curr={this.state.code} prev={this.props.file.get('history')}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.hideDiff}>Close</Button>
                        </Modal.Footer>
                    </Modal>
               </div>
    }

    onClick() {
        let state = !this.state.readOnly;
        this.setState({
            readOnly: state
        }, () => {
            if (this.state.readOnly) {
                this.props.modifyContent(this.props.file.get('extname'), this.state.code)
                .catch(() => {
                    this.props.loadContent(this.props.file.get('extname'));
                });
            }
        });
    }

    updateCode(newCode) {
        this.setState({
            code: newCode
        })
    }

    showDiff() {
        this.setState({
            showDiff: true
        }, () => this.loadHistory());
    }

    hideDiff() {
        this.setState({
            showDiff: false
        });
    }

    loadHistory() {
        this.props.loadHistory(this.props.file.get('extname'));
    }
}


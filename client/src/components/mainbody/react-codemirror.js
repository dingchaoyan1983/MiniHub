const React = require('react');
const ReactDOM = require('react-dom');
const findDOMNode = ReactDOM.findDOMNode;
const className = require('classnames');

function normalizeLineEndings (str) {
	if (!str) return str;
	return str.replace(/\r\n|\r/g, '\n');
}

const CodeMirror = React.createClass({
	propTypes: {
		className: React.PropTypes.any,
		codeMirrorInstance: React.PropTypes.func,
		defaultValue: React.PropTypes.string,
		onChange: React.PropTypes.func,
		onFocusChange: React.PropTypes.func,
		onScroll: React.PropTypes.func,
		options: React.PropTypes.object,
		path: React.PropTypes.string,
		value: React.PropTypes.string,
		preserveScrollPosition: React.PropTypes.bool,
		changes: React.PropTypes.object
	},
	getDefaultProps () {
		return {
			preserveScrollPosition: false,
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
		};
	},
	getCodeMirrorInstance () {
		return this.props.codeMirrorInstance || require('codemirror');
	},
	getInitialState () {
		return {
			isFocused: false,
		};
	},
	componentDidMount () {
		const textareaNode = findDOMNode(this.refs.textarea);
		const codeMirrorInstance = this.getCodeMirrorInstance();
		this.codeMirror = codeMirrorInstance.fromTextArea(textareaNode, this.props.options);
		this.codeMirror.on('change', this.codemirrorValueChanged);
		this.codeMirror.on('focus', this.focusChanged.bind(this, true));
		this.codeMirror.on('blur', this.focusChanged.bind(this, false));
		this.codeMirror.on('scroll', this.scrollChanged);
		this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
	},
	componentWillUnmount () {
		// is there a lighter-weight way to remove the cm instance?
		if (this.codeMirror) {
			this.codeMirror.toTextArea();
		}
	},
	componentWillReceiveProps: function (nextProps) {
		//当传进来的change发生变化并且origin是setValue的时候我们才更新editor的值
		if(this.codeMirror && this.props.changes !== nextProps.changes && (nextProps.changes.origin === 'setValue' ||  nextProps.changes.origin === 'sync socket')) {
			if(nextProps.changes.origin === 'setValue') {
				this.codeMirror.setValue('');
			}
			//我不知道为什么要这样写，也许这个才是换行符吧
			if( nextProps.changes.text.length === 2 
				&& nextProps.changes.text[0] === nextProps.changes.text[1] 
				&& nextProps.changes.text[0] ==='') {
				this.codeMirror.replaceRange('\n', nextProps.changes.from, nextProps.changes.to, nextProps.changes.origin )
			} else {
				for(let i = 0; i < nextProps.changes.text.length; i++) {
					this.codeMirror.replaceRange(nextProps.changes.text[i], nextProps.changes.from, nextProps.changes.to, nextProps.changes.origin)
				}
			}
		}

		if (typeof nextProps.options === 'object') {
			for (let optionName in nextProps.options) {
				if (nextProps.options.hasOwnProperty(optionName)) {
					this.codeMirror.setOption(optionName, nextProps.options[optionName]);
				}
			}
		}
	},
	getCodeMirror () {
		return this.codeMirror;
	},
	focus () {
		if (this.codeMirror) {
			this.codeMirror.focus();
		}
	},
	focusChanged (focused) {
		this.setState({
			isFocused: focused,
		});
		this.props.onFocusChange && this.props.onFocusChange(focused);
	},
	scrollChanged (cm) {
		this.props.onScroll && this.props.onScroll(cm.getScrollInfo());
	},
	codemirrorValueChanged (doc, change) {
		//当监听change事件不是setValue和sync socket的时候，我们才公布这个change 事件到外部，不然会造成事件循环
		if (this.props.onChange && change.origin !== 'setValue' && change.origin !== 'sync socket') {
			this.props.onChange(doc.getValue(), change);
		}
	},
	render () {
		const editorClassName = className(
			'ReactCodeMirror',
			this.state.isFocused ? 'ReactCodeMirror--focused' : null,
			this.props.className
		);
		return (
			<div className={editorClassName}>
				<textarea ref="textarea" name={this.props.path} defaultValue={this.props.value} autoComplete="off" />
			</div>
		);
	},
});

module.exports = CodeMirror;

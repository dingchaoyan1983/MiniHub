import React from 'react';
import classname from 'classname';

const {Children, PureComponent} = React;

export default class ActionIcon extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false
        };

        this.closable = true;
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    render() {
        const {action, text, children} = this.props;
        let dom = <div className={classname(`o-${action}`, 'fl')}>
                    <span className="icofont h-ico"></span>
                    <span className="h-txt">{text}</span>
                  </div> 

        if (Children.count(children)) {
            dom = <div className={classname(`o-${action}`, 'fl', this.state.expanded ? 'open' : '')} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <span className="icofont h-ico"></span>
                    <span className="h-txt">{text}</span>
                    <div className="h-pop">
                        <i></i>
                        {children}
                    </div>
                 </div> 
        }   

        return dom;      
    }

    onMouseEnter() {
        this.closable = false;
        this.setState({
            expanded: true
        })
    }

    onMouseLeave() {
        this.closable = true;

        window.setTimeout(() => {
            if (this.closable) {
                this.setState({
                    expanded: false
                })
            }
        }, 100);
    }
}

ActionIcon.defaultProps = {
    action: 'history',
    text: '历史'
};

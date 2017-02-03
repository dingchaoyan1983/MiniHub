import React from 'react';
import classname from 'classname';

const {PureComponent, Children} = React;

export default class NavItem extends PureComponent {
    constructor(props, context) {
        super(...arguments);
        this.state= {
            expanded: false
        };

        this.closable = true;
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    render() {
        let navItem = null;

        if(Children.count(this.props.children)) {
            navItem = <li className={classname('fl', 'assort' ,this.props.className, this.state.expanded ? 'open' : '')} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                        <a href={this.props.href}>{this.props.name}</a>
                        <i></i>
                        <div className="a-pop">
                            <i></i>
                            {this.props.children}
                        </div>
                      </li>
        } else {
            navItem = <li className={classname('fl', this.props.className)}>
                        <a href={this.props.href}>{this.props.name}</a>
                      </li>
        }

        return navItem;      
    }

    onMouseEnter() {
        this.closable = false;
        this.setState({
            expanded: true
        });
    }

    onMouseLeave() {
        this.closable = true;
        window.setTimeout(() => {
           if (this.closable) {
               this.setState({
                   expanded: false
               });
           }
        }, 100);
    }
}

NavItem.defaultProps = {
        className: '',
        href: 'http://www.baidu.com',
        name: 'untitiled'
};

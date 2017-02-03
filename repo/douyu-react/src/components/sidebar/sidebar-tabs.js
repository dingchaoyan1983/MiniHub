import React from 'react';
import classname from 'classname';

const {PureComponent, Children, cloneElement} = React;

export default class SidebarTabs extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeTabIndex: this.props.initAcitveTabIndex
        };

        this.onClick = this.onClick.bind(this);
    }

    render() {
        const { activeTabIndex } = this.state;
        const tabNavs = Children.map(this.props.children, (child, index) => {
            const {name='untitled', className=''} = child.props;
            
            return {
                name,
                index,
                className
            }
        });

        const children = Children.map(this.props.children, (child, index) => cloneElement(child, {selected: index === activeTabIndex}));

        return <div className="leftnav-cate">
                    <div className="r-tit">
                        <ul>
                            {tabNavs.map(({name, index, className}) => 
                                 <li className={classname(index === this.state.activeTabIndex ? 'cur' : '')} onClick={this.onClick.bind(this, index)}>
                                    <i className={classname('icon', className)}></i>
                                    <span>{name}</span>
                                 </li>
                            )}
                        </ul>
                    </div>
                    {children}
               </div>
    }

    onClick(selectedIndex) {
        this.setState({
            activeTabIndex: selectedIndex
        });
    }
}

SidebarTabs.defaultProps = {
    initAcitveTabIndex: 0
};

import React from 'react';

const {PureComponent, Children, cloneElement} = React;

export default class SelectStateManager extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeIndex: this.props.initActiveIndex
        };

        this.onClick = this.onClick.bind(this);
    }

    render() {
        const children = Children.map(this.props.children, (child, index) => {
            return cloneElement(child, {index: index, selected: this.state.activeIndex === index, onClick: this.onClick})
        });

        return <ul>
                 {children}
               </ul>
    }

    onClick(selectedIndex) {
       this.setState({
           activeIndex: selectedIndex
       })
    }
}

SelectStateManager.defaultProps = {
    initActiveIndex: 0
}

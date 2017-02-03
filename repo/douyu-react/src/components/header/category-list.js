import React from 'react';

export default function CategoryList(props) {
    const {name='untitiled', items=[]} = props;

    return <div className="a-list">
                <h3>{name}</h3>
                <ul className="btns">
                    {
                        items.map((item) => <li><a target="_blank" className="btn" href={item.href}>{item.text}</a></li>)
                    }
                </ul>
                {props.children}
           </div>
}

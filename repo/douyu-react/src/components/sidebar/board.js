import React from 'react';

export default function Board(props) {
    const {header: {title='untitled', href='javascript:void(0)'}={}, items = []} = props;

    return <div>
             <dl>
                <dt className="cur">
                    <a href={href}>
                        <i></i><span>{title}</span>
                    </a>
                </dt>
             </dl>
             <dd>
                <ul className="clearfix">
                    {
                        items.map(({text = 'untitled', href='javascript:void(0)'}) => <li><a href={href} title={text}>{text}</a></li>)
                    }
                 </ul>
             </dd>
           </div>
}

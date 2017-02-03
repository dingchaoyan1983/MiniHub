import React from 'react';
import classname from 'classname';

export default function SidebarTab(props) {
    return <div className={classname('r-cont', 'column-cont', props.selected ? '' : 'hide')}>
                {props.children}
           </div>
}

import React from 'react';
import classname from 'classname';

export default function (props) {
    const {shown = false} = props.loadingSpinner.toJS();
    return <div className={classname('loading-spinner', shown ? 'show' : '')}/>
    
}

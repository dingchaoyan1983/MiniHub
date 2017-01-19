import React from 'react';
import Header from './components/header';
import LoadingSpinner from './components/container/loading-spinner';

export default function(props) {
    return <div>
                <div className="app">
                    <Header {...props}/>
                    {props.children}
                </div>
                <LoadingSpinner/>
            </div>
}

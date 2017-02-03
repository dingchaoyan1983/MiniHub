import React from 'react';
import Nav from './nav';
import HeaderActions from './header-actions';

export default function Header(props) {
    return (<div id="header">
                <div className="head w1366head">
                    <a className="head-logo fl" href="https://www.douyu.com/"></a>
                    <Nav {...props}/>
                    <HeaderActions/>
                </div>
            </div>)
}

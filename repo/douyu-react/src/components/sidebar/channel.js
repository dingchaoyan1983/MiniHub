import classname from 'classname';
import React from 'react';
import {Link} from 'react-router'

export default function Channel(props) {
    const {text='全部直播', href='javascript:void(0)', iconClassName='icon-live'} = props;

    return <li className={classname('channel-catelist-resize')}>
                <Link activeClassName="cur" to={props.to} className="channel-catelist-resize" href={href}> <i className={classname('icon', iconClassName )}></i>
                    <span>{text}</span>
                </Link>
            </li>
}

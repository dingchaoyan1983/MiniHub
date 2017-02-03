import React from 'react';

export default function ViewAllBtn(props) {
    const {href='http://www.baidu.com'} = props;

    return <div className="btn-all"><a target="_blank" href={href}>全部&gt;&gt;</a></div>
}

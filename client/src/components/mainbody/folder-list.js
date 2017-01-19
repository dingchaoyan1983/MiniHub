import React from 'react';
import FolderItem from './folder-item';

export default function(props) {
    const {folders, splat} = props;
    
    return <table className="table table-hover folder-list">
            <tbody>
                {
                    folders.map((folder, index) => <FolderItem key={index} {...folder} splat={splat}/>)
                }
            </tbody>
           </table>
}

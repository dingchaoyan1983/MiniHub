import React from 'react';
import CodeEditor from '../container/code-editor';
import FolderList from './folder-list';
import { isFile } from '../../utils';

export default  function(props) {
    const { splat = '' } = props.params;
    let children = <FolderList {...props} splat={splat}/>;

    if (isFile(splat)) {
        children = <CodeEditor  {...props} roomId={splat}/>;
    }

    return <div>
                {children}
           </div>
}

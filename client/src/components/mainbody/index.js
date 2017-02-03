import React from 'react';
import CodeEditor from '../container/code-editor';
import FolderList from './folder-list';
import { isFile } from '../../utils';

export default  function(props) {
    const file = props.file.toJSON();
    const { splat = '' } = props.params;

    let children = null;

    if (file.isFile) {
        children = <CodeEditor  content={file.content} roomId={splat}/>;
    } else if (file.isDirectory) {
        children = <FolderList folders={file.content} splat={splat}/>
    }

    return <div>
                {children}
           </div>
}

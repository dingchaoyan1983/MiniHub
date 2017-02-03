/**
 * Header component
 */
import React from 'react';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import { Link } from 'react-router';
import classname from 'classname';
import { splitPath, isFile } from '../../utils';

export default function(props) {
    const { splat = '' } = props.params;
    let headerDom = <div className="docs-header" id="content">
                        <div>
                            <h1>Mini Hub</h1>
                            <p></p>
                        </div>
                    </div>;

    if (splat === '') {
        return headerDom;
    }
    
    const paths = splitPath(splat);
    const breadcrumbs = paths.map((path, index) => {
        return {
            text: path,
            linkable: index < paths.length - 1,
            route: `/${paths.slice(0, index + 1).join('/')}`,
            file: isFile(path)
        }
    });

    headerDom = <div>
                    <div className="docs-header sub">
                        <div>
                            <h1>Mini Hub</h1>
                            <p></p>
                        </div>
                     </div>
                     <Breadcrumb className="editor-navigate">
                     <Breadcrumb.Item active={true} key={-1}>
                         <i className="icon icon-home3 linkable"/>
                         <Link to="/">Home</Link>
                     </Breadcrumb.Item>
                        {
                            breadcrumbs.map(({file, linkable, route, text}, index) =>
                                <Breadcrumb.Item active={true} key={index}>
                                    <i className={classname('icon', file ? 'icon-file-text' : 'icon-folder', linkable ? 'linkable' : '')}/>
                                    {
                                        linkable ? <Link to={route}>{text}</Link> : text
                                    }
                                </Breadcrumb.Item>
                            )
                        }
                     </Breadcrumb>
                </div>
    
    return headerDom;
}

import React from 'react';
import Project from './project';

export default function (props) {
    const { projects } = props;
        
    return <ul className="projects">
                    {
                        projects.map((project, index) => <Project {...project} key={index}/>)
                    }
           </ul>
}

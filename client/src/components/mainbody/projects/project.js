import React from 'react';
import { Link } from 'react-router';
import Col from 'react-bootstrap/lib/Col';

export default function(props) {
    const {name, description, createTime, contributors} = props;
    
    return <li className="project clearfix">
                <div className="project__name">
                    <h3>
                        <i className="icon icon-rocket project_name__icon"/>
                        <Link to={name}>
                            {name}
                        </Link>
                    </h3>
                </div>
                <div className="project__description">
                    {description}
                </div>
                <div className="row">
                    <Col sm={8} className="project__authors">
                        <i className="icon icon-users"/>
                        {contributors.join(', ')}
                    </Col> 
                    <Col sm={4} className="project__createTime">
                            <i className="icon icon-clock"/>
                            {createTime}
                    </Col> 
                </div>
              </li>
}

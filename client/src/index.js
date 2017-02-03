/**
 * application entry point.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/classList-polyfill';
import '../assets/index.scss';
import Router from './router';

const ROOT= 'container';

ReactDOM.render(<Router/>, document.getElementById(ROOT));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/vendors/vendor.scss';
import './assets/base/_base.sass';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import {App, Header, Content} from './App.jsx';

let modals = (
    <div>
        <App />
        <Header />
        <Content />
    </div>
);

ReactDOM.render(modals, document.getElementById('app'));


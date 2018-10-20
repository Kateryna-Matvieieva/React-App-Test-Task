import React from 'react';
import ReactDOM from 'react-dom';
import 'rc-collapse/assets/index.css';
import './index.css';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('container'));

registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App';

//store trzeba tez przy tym importowac Provider z react-redx i w niego sie wrzuca nasza aplikacje
import{store} from './Store/index';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>
);
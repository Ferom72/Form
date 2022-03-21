import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App';
import {FormContextProvider} from './FormContextProvider'

ReactDOM.render(
  <BrowserRouter>
    <FormContextProvider>
      <App/>
    </FormContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

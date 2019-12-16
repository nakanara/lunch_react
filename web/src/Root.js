import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const Root = (prop) => (
  <BrowserRouter>
    <App title={prop.title}/>
  </BrowserRouter>
)

export default Root;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/menu';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

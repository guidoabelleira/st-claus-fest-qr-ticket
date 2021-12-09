import React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();
require('dotenv').config()

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


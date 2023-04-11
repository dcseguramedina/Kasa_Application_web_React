//Import internal libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/Routes';

//Import styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>    
      <Routes />    
  </BrowserRouter>
);
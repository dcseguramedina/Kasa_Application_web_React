//Import internal libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//Import components
import Routes from './routes/Routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

//Import styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Header />   
      <Routes /> 
      <Footer />   
  </BrowserRouter>
);
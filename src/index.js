import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import MainContent from './MainContent.js';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
     <MainContent />
     <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


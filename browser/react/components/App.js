import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default ({ children }) => (
  <div id="main" className="container-fluid">
    <Navbar />
    <div id="content-wrapper">
      <div id="content">
        { children }
      </div>
    </div>
    <Footer />
  </div>
);
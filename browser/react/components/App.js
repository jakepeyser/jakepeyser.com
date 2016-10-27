import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';

export default ({ children }) => (
  <div id="main" className="container-fluid">
    <Helmet
      defaultTitle="Jake Peyser"
      titleTemplate="Jake Peyser | %s"
    />
    <Navbar />
    <div id="content-wrapper">
      <div id="content">
        { children }
      </div>
    </div>
    <Footer />
  </div>
);
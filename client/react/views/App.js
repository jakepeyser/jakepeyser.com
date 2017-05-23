import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import MobileMenu from '../components/navbar/MobileMenu';

export default ({ children }) =>
  <div id="page-wrap">
    <MobileMenu />
    <div id="main">
      <Helmet
        defaultTitle="Jake Peyser"
        titleTemplate="%s | Jake Peyser"
      />
      <Navbar />
      <div id="content-wrapper">
        <div id="content">
          { children }
        </div>
      </div>
      <Footer />
    </div>
  </div>

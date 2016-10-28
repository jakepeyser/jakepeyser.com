import React from 'react';
import Helmet from 'react-helmet';
import NavbarContainer from './navbar/NavbarContainer';
import Footer from './Footer';

export default ({ children }) => (
  <div id="main">
    <Helmet
      defaultTitle="Jake Peyser"
      titleTemplate="Jake Peyser | %s"
    />
    <NavbarContainer />
    <div id="content-wrapper">
      <div id="content">
        { children }
      </div>
    </div>
    <Footer />
  </div>
);
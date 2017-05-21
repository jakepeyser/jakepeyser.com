import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './navbar/Navbar';
import Footer from './Footer';

/* Material Theme components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default ({ children }) => (
  <MuiThemeProvider>
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
  </MuiThemeProvider>
);

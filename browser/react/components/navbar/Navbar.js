import React from 'react';
import { Link } from 'react-router';
import Logo from '../../../assets/logo.svg';
import navList from './nav-list'
import MenuIcon from '../../../assets/menu-icon.svg';

// material-ui elements
import { JPMenu, JPMenuItem } from '../material-style'
import Popover from 'material-ui/Popover/Popover';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuOpen(evt) {
    evt.preventDefault();
    this.setState({
      open: true,
      anchorEl: evt.currentTarget
    });
  }

  handleMenuClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div id='navbar'>
        <Link className="logo-link" to="/home">
          <Logo className="logo" />
        </Link>
        <div className="nav">
          <ul className='nav-list'>
            {
              navList.map(navItem => {
                return (
                  <li key={navItem.href}>
                  { // Render Link or <a> based on internal/external link
                    navItem.href.includes('http') ?
                      <a href={navItem.href}
                        className="nav-link">
                        { navItem.text }
                      </a> :
                      <Link to={navItem.href}
                        className="nav-link"
                        activeClassName="active-nav">
                        { navItem.text }
                      </Link>
                  }
                  </li>
                )
              })
            }
          </ul>
          <MenuIcon
            className="menu-icon"
            onClick={ this.handleMenuOpen } />
        </div>
        <Popover
          className="menu-popover"
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          targetOrigin={{vertical: 'top', horizontal: 'right'}}
          onRequestClose={this.handleMenuClose}>
          <JPMenu>
          {
            navList.map(navItem => {
              return (
                <JPMenuItem key={ navItem.href }
                  onClick={ (evt) => this.handleMenuClose() }>
                {
                  navItem.href.includes('http') ?
                    <a href={navItem.href}
                      className="nav-link">
                      { navItem.text }
                    </a> :
                    <Link to={navItem.href}
                      className="nav-link"
                      activeClassName="active-nav">
                      { navItem.text }
                    </Link>
                }
                </JPMenuItem>
              )
            })
          }
          </JPMenu>
        </Popover>
      </div>
    )
  }
}

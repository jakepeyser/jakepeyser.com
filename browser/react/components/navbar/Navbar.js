import React from 'react';
import { Link } from 'react-router';
import navList from './nav-list.json';
import Logo from '../../../src/images/logo.svg';
import MenuIcon from '../../../src/images/menu-icon.svg';

// material-ui elements
import { JPMenu, JPMenuItem } from '../material-style'
import Popover from 'material-ui/Popover/Popover';
import { hover } from '../colors.js'

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
    const { removeProject } = this.props;
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
                  <li key={navItem.id}>
                    <Link to={navItem.href}
                      className="nav-link"
                      activeClassName="active-nav"
                      onClick={ navItem.href === '/projects' ? removeProject : null }>
                      {navItem.text}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <MenuIcon
            className="menu-icon"
            onTouchTap={ this.handleMenuOpen } />
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
              const linkWrapper = <Link
                                    to={ navItem.href }
                                    activeClassName="active-nav" />
              return (
                <JPMenuItem key={ navItem.id }
                  primaryText={ navItem.text }
                  onTouchTap={ () => {
                    if (navItem.href === '/projects')
                      removeProject()
                    this.handleMenuClose()
                  }}
                  containerElement={ linkWrapper } />
              )
            })
          }
          </JPMenu>
        </Popover>
      </div>
    )
  }
}

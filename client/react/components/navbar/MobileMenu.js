import React from 'react';
import NavList from './NavList'
import MenuIcon from '../../../assets/menu-icon.svg';
import { slide as Menu } from 'react-burger-menu'

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.menuToggled = this.menuToggled.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // Turn menu off when programatically closed
  menuToggled({ isOpen }) {
    if (!isOpen) this.toggleMenu(false)
  }

  // Toggle menu open state
  toggleMenu(status) {
    this.setState({ open: typeof status === 'boolean' ? status : !this.state.open });
  }

  render() {
    const { open } = this.state
    return (
      <div className={`mobile-menu${ open ? ' mobile-menu--active' : ''}`}>
        <div className="mobile-menu__icon-wrapper">
          <MenuIcon onClick={ this.toggleMenu } />
        </div>
        <Menu right isOpen={ open } onStateChange={ this.menuToggled } pageWrapId="main" className="mobile-menu__list">
          <NavList onNavigate={ () => this.menuToggled({ isOpen: false }) } />
        </Menu>
      </div>
    )
  }
}

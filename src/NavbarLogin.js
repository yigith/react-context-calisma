import React, { Component } from 'react'
import AppContext from './AppContext';

export class NavbarLogin extends Component {
  render() {
    return (
      <div>Hoşgeldin {this.context.userName}</div>
    );
  }
}

NavbarLogin.contextType = AppContext;

export default NavbarLogin;
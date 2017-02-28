import React, { Component } from 'react';
import Logo from './Logo';
import Name from './Name';

class Header extends Component {
  render() {
    return (
      <header> 
      	<Logo src={this.logo}/>
      	<Name src={this.name}/>
      </header>          
    );
  }
}

export default Header;
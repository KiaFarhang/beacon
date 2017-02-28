import React, { Component } from 'react';
import './App.css';

class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
          <img src={this.src} className="logo" alt="logo" />
      </div>
    );
  }
}

export default Logo;
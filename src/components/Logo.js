import React, { Component } from 'react';
import './App.css';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
          <img src='http://lorempixel.com/400/200' className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Logo;
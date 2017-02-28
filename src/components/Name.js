import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
          <h2 className='name'>{this.props.name}</h2>
    );
  }
}

export default Name;
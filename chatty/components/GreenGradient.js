import React from 'react';
import { LinearGradient } from 'expo';

import { Colors } from '../constants';

class GreenGradient extends React.PureComponent {
  render() {
    const gradient = [Colors.mint, Colors.greenlantern];

    return (
      <LinearGradient colors={gradient} style={this.props.style}>
        {this.props.children}
      </LinearGradient>
    );
  }
}

export default GreenGradient;

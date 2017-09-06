import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Images } from '../constants';

class Header extends React.PureComponent {
  render() {
    return <Image resizeMode="contain" source={Images.logo} style={styles.logo} />;
  }
}

export default Header;

const styles = StyleSheet.create({
  logo: {
    maxHeight: 36,
    width: 140,
    marginVertical: 20,
  },
});

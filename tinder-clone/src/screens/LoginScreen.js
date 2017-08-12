import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Facebook from '../components/login/Facebook';
import { Colors } from '../themes';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Facebook onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

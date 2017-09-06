import React from 'react';
import { Text, View } from 'react-native';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
}

export default SettingsScreen;

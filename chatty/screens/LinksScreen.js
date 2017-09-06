import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LinksScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Links</Text>
      </View>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

export default LinksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { Button, Image, StyleSheet, TextInput, View } from 'react-native';

export default class CreateScreen extends React.Component {
  state = {
    description: '',
    imageUrl: '',
  };

  _handlePost = () => {
    console.log('handle me');
  };

  _renderButton = () => {
    if (this.state.description && this.state.imageUrl) {
      return <Button title={'Post'} onPress={this.handlePost} />;
    }

    return null;
  };

  _renderImage = () => {
    if (this.state.imageUrl) {
      return <Image source={{ uri: this.state.imageUrl }} style={styles.image} />;
    }

    return null;
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput />
        <TextInput />

        {this._renderImage}
        {this._renderButton}
      </View>
    );
  }
}

CreateScreen.navigationOptions = {
  title: 'Create',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
});

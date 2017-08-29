import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { MonoText } from '../components';

class Post extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.post.imageUrl }} style={styles.container} />
        <MonoText>{this.props.post.description}</MonoText>
      </View>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 150,
  },
});

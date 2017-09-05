import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';

import { MonoText } from '../components';
import { Layout } from '../constants';

const Field = ({ name, value }) => <MonoText style={styles.field}>{`${name}: ${value}`}</MonoText>;

class BookScreen extends React.Component {
  static navigationOptions = props => {
    const { title } = props.navigation.state.params.item;
    return title;
  };

  render() {
    const { image, author, title, description, rating } = this.props.navigation.state.params.item;

    return (
      <ScrollView style={styles.container}>
        {image && <Image resizeMode="contain" source={{ uri: image }} style={styles.image} />}
        {author && <Field name="Author" value={author} />}
        {title && <Field name="Title" value={title} />}
        {description && <Field name="Description" value={description} />}
        {rating && <Field name="Rating" value={rating} />}
      </ScrollView>
    );
  }
}

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    height: 200,
    width: Layout.window.width,
    marginBottom: 20,
  },
  field: {
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
  },
});

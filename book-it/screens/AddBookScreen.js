import React from 'react';
import { Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';

import { Button, Input } from '../components';
import { Colors, Images } from '../constants';
import { ADD_BOOK_MUTATION } from '../api/graphcool';

const defaultState = {
  book: {
    title: null,
    author: null,
    description: null,
    rating: null,
    image: null,
  },
};

class AddBookScreen extends React.Component {
  state = defaultState;

  updateBook = (key, value) => {
    this.setState({
      book: {
        ...this.state.book,
        [key]: value,
      },
    });
  };

  addBook = () => {
    const { image, title, author, description, rating } = this.state.book;

    this.props
      .addBookMutation({
        variables: {
          image,
          title,
          author,
          description,
          rating: parseInt(rating, 10),
        },
      })
      .then(response => {
        this.setState(defaultState);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image resizeMode="contain" style={styles.logo} source={Images.logo} />
        <Input
          value={this.state.book.title}
          onChangeText={text => this.updateBook('title', text)}
          title="Title"
          autoCapitalize={'sentences'}
        />
        <Input
          value={this.state.book.author}
          onChangeText={text => this.updateBook('author', text)}
          title="Author"
          autoCapitalize={'sentences'}
        />
        <Input
          value={this.state.book.description}
          onChangeText={text => this.updateBook('description', text)}
          title="Description"
          autoCapitalize={'sentences'}
        />
        <Input
          value={this.state.book.rating}
          onChangeText={text => this.updateBook('rating', text)}
          title="Rating"
          keyboardType={'numeric'}
        />
        <Input
          value={this.state.book.image}
          onChangeText={text => this.updateBook('image', text)}
          title="Image"
          autoCapitalize={'none'}
        />
        <Button title="Add Book" onPress={this.addBook} />
      </KeyboardAvoidingView>
    );
  }
}

AddBookScreen.navigationOptions = {
  header: null,
};

export default graphql(ADD_BOOK_MUTATION, { name: 'addBookMutation' })(AddBookScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.gray,
  },
  logo: {
    alignSelf: 'center',
    maxHeight: 45,
    marginVertical: 25,
    width: 200,
  },
});

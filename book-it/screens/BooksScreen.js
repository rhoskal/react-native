import React from 'react';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { graphql } from 'react-apollo';

import { Header, MonoText } from '../components';
import { ALL_BOOKS_QUERY, BOOKS_SUBSCRIPTION } from '../api/graphcool';

class BooksScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };

  componentWillMount() {
    this._subscribeToNewBooks();
  }

  _subscribeToNewBooks = () => {
    this.props.allBooksQuery.subscribeToMore({
      document: BOOKS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        console.log(subscriptionData);
        if (!subscriptionData.data) {
          return prev;
        }
        const { node } = subscriptionData.data.Book;
        console.log(node);
        return {
          ...prev,
          allBooks: [...prev.allBooks, node],
        };
      },
    });
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <Touchable
      background={Touchable.Ripple('#ccc', false)}
      style={styles.listItem}
      onPress={() => this.props.navigation.navigate('Book', { item })}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <MonoText>{item.title}</MonoText>
        </View>
        <View style={{ marginRight: 15 }}>
          <Ionicons name="ios-arrow-forward" size={22} color="#ccc" />
        </View>
      </View>
    </Touchable>
  );

  render() {
    const { loading } = this.props.allBooksQuery;
    let books = [];

    console.log(this.props.allBooksQuery);
    if (this.props.allBooksQuery.allBooks) {
      books = this.props.allBooksQuery.allBooks;
    }

    return (
      <ScrollView style={styles.container}>
        {loading && <ActivityIndicator size="large" style={{ marginTop: 250 }} />}
        {
          books.map((book, index) => {
            return (
              <MonoText>*{book.title}</MonoText>
            )
          })
        }
      </ScrollView>
    );
  }
}

export default graphql(ALL_BOOKS_QUERY, { name: 'allBooksQuery' })(BooksScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#B0B0B0',
  },
});

// {<FlatList data={books} extraData={this._subscribeToNewBooks} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />}

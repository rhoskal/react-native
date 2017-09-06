import React from 'react';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { graphql } from 'react-apollo';

import { Header, MonoText } from '../components';
import { Layout } from '../constants';
import { ALL_BOOKS_QUERY, BOOKS_SUBSCRIPTION } from '../api/graphcool';

class BooksScreen extends React.Component {
  componentWillMount() {
    this._subscribeToNewBooks();
  }

  _subscribeToNewBooks = () => {
    this.props.allBooksQuery.subscribeToMore({
      document: BOOKS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const { node } = subscriptionData.data.Book;
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
        <View style={{ width: Layout.window.width * 0.8 }}>
          <MonoText numberOfLines={1}>{item.title}</MonoText>
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

    if (this.props.allBooksQuery.allBooks) {
      books = this.props.allBooksQuery.allBooks;
    }

    return (
      <ScrollView style={styles.container}>
        {loading && <ActivityIndicator size="large" style={{ marginTop: 250 }} />}
        {<FlatList data={books} renderItem={this._renderItem} keyExtractor={this._keyExtractor} />}
      </ScrollView>
    );
  }
}

BooksScreen.navigationOptions = {
  headerTitle: <Header />,
};

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

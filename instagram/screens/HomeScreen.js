import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Post } from '../components';

const allPostsQuery = gql`
  query {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }
`;

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Post />
        </ScrollView>
      </View>
    );
  }
}

export default graphql(allPostsQuery, { name: 'allPostsQuery' })(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

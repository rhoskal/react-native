import React from 'react';
import { FlatList, Text } from 'react-native';
import { graphql, gql } from 'react-apollo';

const allLiftsQuery = gql`
  query allLiftsQuery {
    allLifts(orderBy: createdAt_DESC) {
      id
      createdAt
      movement
      weight
    }
  }
`;

class HomeScreen extends React.Component {
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <Text>{`${item.movement}, ${item.weight}, ${item.createdAt}`}</Text>
  );

  render() {
    if (this.props.allLiftsQuery.loading) {
      return <Text>Loading...</Text>;
    }

    if (this.props.allLiftsQuery.error) {
      console.log(this.props.allLiftsQuery.error);
      return <Text>Error!</Text>;
    }

    return (
      <FlatList
        data={this.props.allLiftsQuery.allLifts}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ListEmptyComponent={<Text>Hey Hans! You have 0 lifts in our database.</Text>}
        ListHeaderComponent={<Text>Movement, Weight, Date</Text>}
      />
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Lifts',
};

export default graphql(allLiftsQuery, { name: 'allLiftsQuery' })(HomeScreen);

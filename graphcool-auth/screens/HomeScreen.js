import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { graphql, gql } from 'react-apollo';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

import { CreatePage } from '../screens';

const ALL_LIFTS_QUERY = gql`
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
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  componentWillMount() {
    this.props.navigation.setParams({
      submitLift: this._submitLift,
    });
  }

  _submitLift = () => {
    this.setState({ modalVisible: true });
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <Text>{`${item.movement}, ${item.weight}, ${moment(item.createdAt, moment.ISO_8601).format('MM/DD/YYYY')}`}</Text>
  );

  render() {
    if (this.props.allLiftsQuery.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (this.props.allLiftsQuery.error) {
      console.log(this.props.allLiftsQuery.error);
      return <Text>Error!</Text>;
    }

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({ modalVisible: false })}>
          <CreatePage
            onComplete={() => {
              this.props.allLiftsQuery.refetch();
              this.setState({ modalVisible: false });
            }}
          />
        </Modal>
        <FlatList
          data={this.props.allLiftsQuery.allLifts}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ListEmptyComponent={<Text>Hey Hans! You have 0 lifts in our database.</Text>}
          ListHeaderComponent={<Text>Movement, Weight, Date</Text>}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Lifts',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.state.params.submitLift()} style={{ marginRight: 15 }}>
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle'}
          size={28}
        />
      </TouchableOpacity>
    ),
  };
};

export default graphql(ALL_LIFTS_QUERY, { name: 'allLiftsQuery' })(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

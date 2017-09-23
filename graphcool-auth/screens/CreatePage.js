import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { graphql, gql } from 'react-apollo';

const CREATE_LIFT_MUTATION = gql`
  mutation($movement: String!, $weight: Float!) {
    createLift(movement: $movement, weight: $weight) {
      id
    }
  }
`;

class CreatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movement: 'Snatch',
      weight: '456',
    };
  }

  _submitLift = () => {
    console.log('adding lift');
    const { movement, weight } = this.state;
    this.props
      .createLiftMutation({
        variables: { movement, weight: parseInt(weight, 10) },
      })
      .then(this.props.onComplete())
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this._submitLift}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

CreatePage.navigationOptions = {
  header: null,
};

export default graphql(CREATE_LIFT_MUTATION, { name: 'createLiftMutation' })(CreatePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    height: 35,
    padding: 30,
  },
});

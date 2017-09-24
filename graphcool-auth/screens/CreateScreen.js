import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { graphql } from 'react-apollo';

import { CREATE_LIFT_MUTATION } from '../api/graphcool';

class CreateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movement: 'Snatch',
      weight: '456',
      units: 'kg',
    };
  }

  _submitLift = () => {
    const { movement, units, weight } = this.state;
    this.props
      .createLiftMutation({
        variables: { movement, units, weight: parseInt(weight, 10) },
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

CreateScreen.navigationOptions = {
  header: null,
};

export default graphql(CREATE_LIFT_MUTATION, { name: 'createLiftMutation' })(CreateScreen);

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

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { graphql } from 'react-apollo';

import { UPDATE_LIFT_MUTATION } from '../api/graphcool';

class UpdateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movement: 'Clean',
      weight: '111',
      units: 'lb',
    };
  }

  _updateLift(item) {
    const { id, movement, units, weight } = item;
    this.props
      .updateLiftMutation({
        variables: { id, movement: 'Clean', units: 'lb', weight: parseInt('111', 10) },
      })
      .then(this.props.onComplete())
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.item.id} {this.props.item.movement} {this.props.item.weight}{this.props.item.units}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this._updateLift(this.props.item)}>
          <Text>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

UpdateScreen.navigationOptions = {
  header: null,
};

export default graphql(UPDATE_LIFT_MUTATION, { name: 'updateLiftMutation' })(UpdateScreen);

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

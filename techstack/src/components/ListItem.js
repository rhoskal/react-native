import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

import CardSection from './CardSection';

class ListItem extends Component {
  expandable() {
    if (this.props.library.id === this.props.selectedLibraryId) {
      return (
        <Text>{ this.props.library.description }</Text>
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.library.id}>
        <View>
          <CardSection>
            <Text style={styles.title}>{ this.props.library.title }</Text>
          </CardSection>

          { this.expandable() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(null, actions)(ListItem);

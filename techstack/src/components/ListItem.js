import React, { Component } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

import CardSection from './CardSection';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  
  expandable() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{ this.props.library.description }</Text>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id)}>
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
  },

  description: {
    paddingLeft: 10,
    paddingRight: 10
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);

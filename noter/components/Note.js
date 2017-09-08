import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { connect } from 'react-redux';

import { Colors } from '../constants';
import { deleteNote } from '../state/actions';

class Note extends React.Component {
  render() {
    return (
      <View style={styles.note}>
        <Text style={styles.noteText}>{this.props.text}</Text>
        <Text style={styles.noteText}>
          {moment(this.props.date, moment.ISO_8601).format('MM/DD/YYYY')}
        </Text>

        <TouchableOpacity
          style={styles.noteDelete}
          onPress={() => this.props.deleteNote(this.props.keyval)}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-trash-outline' : 'md-trash'}
            size={28}
            style={{ marginBottom: -3 }}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { deleteNote })(Note);

const styles = StyleSheet.create({
  note: {
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray,
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightblue,
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: Colors.pink,
  },
});

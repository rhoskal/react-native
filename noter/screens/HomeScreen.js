import React from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';

import { Button, Header, Input, Note } from '../components';
import { addNote } from '../state/actions';

const defaultState = {
  note: {
    text: null,
    date: null,
  },
};

class HomeScreen extends React.Component {
  state = defaultState;

  _updateNoteText = (key, value) => {
    this.setState({
      note: {
        ...this.state.note,
        [key]: value,
        date: moment(),
      },
    });
  };

  _addNoteAndResetState = () => {
    if (!this.state.note.text) {
      Alert.alert('Error!', 'You forgot to enter your note.', [{ text: 'OK' }], {
        cancelable: false,
      });
    } else {
      this.props.addNote(this.state.note);
      this.setState(defaultState);
    }
  };

  render() {
    let notesArray = this.props.notes.map((value, index) => {
      return <Note key={index} keyval={index} text={value.text} date={value.date} />;
    });

    return (
      <View style={{ flex: 1 }}>
        <Header title="- NOTER -" />
        <ScrollView style={styles.scrollContainer}>{notesArray}</ScrollView>
        <View style={styles.footer}>
          <Button title="+" onPress={this._addNoteAndResetState} />
          <Input
            title="> note"
            value={this.state.note.text}
            onChangeText={text => this._updateNoteText('text', text)}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return notes;
};

export default connect(mapStateToProps, { addNote })(HomeScreen);

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
});

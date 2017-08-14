import React, { Component } from 'react';
import { ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';

import CircleImage from '../components/CircleImage';

export default class MatchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      matches: [],
    };
  }

  componentWillMount() {
    this._fetchMatches(this.props.user.uid);
  }

  _getOverlap = (liked, likedBack) => {
    const likedTrue = _.pickBy(liked, value => value);
    const likedBackTrue = _.pickBy(likedBack, value => value);

    return _.intersection(_.keys(likedTrue), _.keys(likedBackTrue));
  }

  _getUser = (uid) => {
    return firebase.database().ref('users').child(uid).once('value')
      .then(snap => snap.val());
  }

  _fetchMatches = (uid) => {
    firebase.database().ref('relationships').child(uid).on('value', snap => {
      const relations = snap.val() || [];
      const allMatches = this._getOverlap(relations.liked, relations.likedBack);
      //console.log(`allMatches: ${allMatches}`);
      const promises = allMatches.map(profileUid => {
        const foundProfile = _.find(this.state.matches, profile => profile.uid === profileUid);
        //return foundProfile ? foundProfile : this._getUser(profileUid);
        return foundProfile || this._getUser(profileUid);
      });

      Promise.all(promises).then(data =>
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
          matches: data,
        })
      );
    });
  }

  _renderRow = (rowData) => {
    const { id, first_name, work } = rowData;
    const bio = (work && work[0] && work[0].position) ? work[0].position.name : null;

    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('Chat', { user: this.props.user, profile: rowData })}>
        <View style={styles.row}>
          <CircleImage size={70} facebookID={id} />
          <View style={styles.info}>
            <Text style={{ fontSize: 18 }}>{ first_name }</Text>
            <Text style={{ fontSize: 15, color: 'darkgrey' }}>{ bio }</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _renderSeparator = (sectionID, rowID) => {
    return (
      <View key={rowID} style={styles.separator} />
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
        enableEmptySections
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    top: 30,
  },

  info: {
    justifyContent: 'center',
    marginLeft: 10,
  },

  row: {
    flexDirection: 'row',
    padding: 10,
  },

  separator: {
    height: 1,
    backgroundColor: 'whitesmoke',
    marginLeft: 100,
  },
});

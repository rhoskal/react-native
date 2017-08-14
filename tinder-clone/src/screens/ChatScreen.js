import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase';

export default class ChatScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      user: this.props.navigation.state.params.user,
      profile: this.props.navigation.state.params.profile,
    };
  }

  componentWillMount() {
    const { user, profile } = this.state;
    this.chatID = user.uid > profile.uid ? `${user.uid}-${profile.uid}` : `${profile.uid}-${user.uid}`;
    this._watchChat();
  }

  _watchChat = () => {
    firebase.database().ref('messages').child(this.chatID).on('value', snap => {
      const messages = [];
      snap.forEach(message => {
        messages.push(message.val());
      });
      messages.reverse();
      this.setState({ messages });
    });
  }

  _onSend = (message) => {
    firebase.database().ref('messages').child(this.chatID)
      .push({ ...message[0], createdAt: new Date().getTime() });
  }

  render() {
    const avatar = `https://graph.facebook.com/${this.state.user.id}/picture?height=80`;

    return (
      <GiftedChat
        messages={this.state.messages}
        user={{ _id: this.state.user.uid, avatar }}
        onSend={this._onSend}
      />
    );
  }
}

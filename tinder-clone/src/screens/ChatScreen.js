import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <GiftedChat
        messages={demoMessages}
        user={{ _id: '123test' }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const demoMessages = [
  {
    text: 'Hell yeah! #winning',
    createdAt: 1489091435797,
    _id: '10046a73-59c9-4a2a-93fe-aohgpwerg034',
    user: {
      _id: '123test',
      avatar: 'https://graph.facebook.com/09615623515/picture?height=80',
    },
  },
  {
    text: 'Sure Penguin Man!',
    createdAt: 1489091437797,
    _id: '6f36d879-43de-4853-bcf4-4810dcad1e9a',
    user: {
      _id: '-KcEv8h7GrwAvAf4VTnW',
      avatar: 'https://graph.facebook.com/259389830744794/picture?height=80',
    },
  },
  {
    text: 'Coffee?',
    createdAt: 1489091435797,
    _id: '10046a73-59c9-4a2a-93fe-edaf8da815d2',
    user: {
      _id: '123test',
      avatar: 'https://graph.facebook.com/09615623515/picture?height=80',
    },
  },
  {
    text: 'My hero ❤️️',
    createdAt: 1489091433016,
    _id: '0d053339-227c-44d2-a030-4c12e4087d2d',
    user: {
      _id: '-KcEv8h7GrwAvAf4VTnW',
      avatar: 'https://graph.facebook.com/259389830744794/picture?height=80',
    },
  },
  {
    text: 'I once saved a baby penguin 🐧 from drowning',
    createdAt: 1489091430713,
    _id: '33dafbde-5be7-4268-ae55-f474e42368b5',
    user: {
      _id: '123test',
      avatar: 'https://graph.facebook.com/09615623515/picture?height=80',
    },
  },
]

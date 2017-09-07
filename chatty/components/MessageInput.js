import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Colors } from '../constants';

const sendButton = send => (
  <FontAwesome.Button
    backgroundColor={'blue'}
    borderRadius={16}
    color={'white'}
    iconStyle={styles.iconStyle}
    name="send"
    onPress={send}
    size={16}
    style={styles.sendButton}
  />
);

class MessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.send = this.send.bind(this);
  }

  send() {
    this.props.send(this.state.text);
    this.textInput.clear();
    this.textInput.blur();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            ref={ref => {
              this.textInput = ref;
            }}
            onChangeText={text => this.setState({ text })}
            style={styles.input}
            placeholder="Type your message here!"
          />
        </View>
        <View style={styles.sendButtonContainer}>{sendButton(this.send)}</View>
      </View>
    );
  }
}

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    backgroundColor: '#f5f1ee',
    borderColor: '#dbdbdb',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  input: {
    backgroundColor: Colors.white,
    borderColor: '#dbdbdb',
    borderRadius: 15,
    borderWidth: 1,
    color: Colors.black,
    height: 32,
    paddingHorizontal: 8,
  },
  sendButtonContainer: {
    paddingRight: 12,
    paddingVertical: 6,
  },
  sendButton: {
    height: 32,
    width: 32,
  },
  iconStyle: {
    marginRight: 0,
  },
});

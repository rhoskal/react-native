import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TOPICS = ['food', 'drinks', 'coffee', 'shops', 'sights', 'arts'];

class OverlayTopics extends React.PureComponent {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal animationType="fade" transparent={false} visible={this.state.modalVisible}>
          <View style={styles.container}>
            <Text style={styles.questionText}>What do you feel like?</Text>
            {TOPICS.map(topic => (
              <TouchableOpacity
                key={topic}
                style={styles.btn}
                onPress={() => {
                  //this.setModalVisible(!this.state.modalVisible);
                  console.log(topic);
                }}>
                <Text style={{ fontWeight: 'bold' }}>{topic}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </View>
    );
  }
}

export default OverlayTopics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  questionText: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
    marginBottom: 15,
  },
  btn: {
    backgroundColor: 'white',
    height: 35,
    margin: 5,
    padding: 15,
    justifyContent: 'center',
  },
});

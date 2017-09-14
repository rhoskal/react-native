import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { MapView } from 'expo';

class Recommendation extends React.PureComponent {
  render() {
    return (
      <MapView.Marker coordinate={{ latitude: this.props.r.location.lat, longitude: this.props.r.location.lon }}>
        <MapView.Callout>
          <View>
            <Image source={{ uri: 'photo' }} />
            <View>
              <Text>Subtitle</Text>
              <Text>Caption</Text>
            </View>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    );
  }
}

export default Recommendation;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 200,
    height: 200,
  },
  content: {
    flex: 1,
  },
  img: {
    flex: 1,
  },
});

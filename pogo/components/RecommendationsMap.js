import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';

class RecommendationsMap extends React.Component {
  render() {
    if (!this.props.location) {
      return <ActivityIndicator size="large" />;
    } else {
      console.log(this.props.location.coords);
      return (
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: this.props.location.coords.latitude,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }
  }
}

const mapStateToProps = ({ recommendations }) => {
  const { location } = recommendations;

  return { location };
};

export default connect(mapStateToProps, {})(RecommendationsMap);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// <MapView
//   style={styles.container}
//   initialRegion={{
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   }}
// />

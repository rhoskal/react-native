import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Location, MapView, Permissions } from 'expo';
import { connect } from 'react-redux';

import { OverlayTopics, Recommendation } from '../components';
import { fetchVenues, updateLocation } from '../state/actions';

class HomeScreen extends React.Component {
  state = {
    gettingCurrentLocation: false,
  };

  async _getLocationAsync() {
    this.setState({ gettingCurrentLocation: true });
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    } else {
      const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      this.props.updateLocation(location);
      this.setState({ gettingCurrentLocation: false });
    }
  }

  componentWillMount() {
    this._getLocationAsync();
  }

  render() {
    if (this.state.gettingCurrentLocation) {
      return <ActivityIndicator style={styles.activityIndicator} size="large" />;
    } else {
      const { latitude, longitude } = this.props.location.coords;
      this.props.fetchVenues({ latitude, longitude }, 'food');

      return (
        <MapView
          style={styles.container}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Circle
            center={{
              latitude,
              longitude,
            }}
            radius={150}
            strokeWidth={0.5}
            strokeColor="rgba(66, 180, 230, 1)"
            fillColor="rgba(66, 180, 230, 0.2)"
          />
          <MapView.Circle
            center={{
              latitude,
              longitude,
            }}
            radius={75}
            strokeWidth={0.5}
            strokeColor="rgba(66, 180, 230, 1)"
            fillColor="rgba(66, 180, 230, 1)"
          />
        </MapView>
      );
    }
  }
}

const mapStateToProps = ({ recommendations }) => {
  const { location, venues } = recommendations;

  return { location, venues };
};

export default connect(mapStateToProps, { updateLocation, fetchVenues })(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

    // this.props.venues.map(r => <Recommendation {...r} />);

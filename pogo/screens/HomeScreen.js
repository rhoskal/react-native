import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Location, MapView, Permissions } from 'expo';
import { connect } from 'react-redux';

import { updateLocation } from '../state/actions';

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
      return <ActivityIndicator size="large" />;
    } else {
      return (
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: this.props.location.coords.latitude,
            longitude: this.props.location.coords.longitude,
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

export default connect(mapStateToProps, { updateLocation })(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

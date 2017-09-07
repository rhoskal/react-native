import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading, Font } from 'expo';

import HomeScreen from './screens/HomeScreen';
import store from './state/store';

export default class App extends React.Component {
  state = {
    assetsAreLoaded: false,
  };

  async _loadAssetsAsync() {
    try {
      await Promise.all([
        Font.loadAsync([
          { 'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf') },
          { 'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf') },
          { 'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf') },
        ]),
      ]);
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <HomeScreen />
          </View>
        </Provider>
      );
    }
  }
}

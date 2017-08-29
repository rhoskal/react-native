import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {
  state = {
    assetsAreLoaded: false,
  };

  const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj6wx7ujx00go0187jjw7uszo'
  });

  const client = new ApolloClient({
    networkInterface
  });

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <ApolloProvider client={client}>
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {Platform.OS === 'android' &&
              <View style={{ height: 24, backgroundColor: 'rgba(0,0,0,0.2)' }} />}
            <RootNavigation />
          </View>
        </ApolloProvider>
      );
    }
  }

  async _loadAssetsAsync() {
    try {
      await Promise.all([
        Asset.loadAsync([
          require('./assets/images/robot-dev.png'),
          require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync([
          Ionicons.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
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
}

import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import RootNavigation from './navigation/RootNavigation';

const projectId = 'cj76e1mfz1i6h01333ucgvmqv';
const wsClient = new SubscriptionClient(`wss://subscriptions.graph.cool/v1/${projectId}`, {
  reconnect: true,
  connectionParams: {},
});
const networkInterface = createNetworkInterface({
  uri: `https://api.graph.cool/simple/v1/${projectId}`,
});
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(networkInterface, wsClient);
const client = new ApolloClient({ networkInterface: networkInterfaceWithSubscriptions });

export default class App extends React.Component {
  state = {
    assetsAreLoaded: false,
  };

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
            {Platform.OS === 'android' && (
              <View style={{ height: 24, backgroundColor: 'rgba(0,0,0,0.2)' }} />
            )}
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
          require('./assets/images/bookit-logo.png'),
          require('./assets/icons/add-icon.png'),
          require('./assets/icons/books-icon.png'),
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

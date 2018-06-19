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
  constructor(props) {
    super(props);

    this.state = {
      assetsAreLoaded: false,
    };
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
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

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/bookit-logo.png'),
        require('./assets/icons/add-icon.png'),
        require('./assets/icons/books-icon.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.error(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

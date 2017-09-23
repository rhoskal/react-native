import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

import RootNavigation from './navigation/RootNavigation';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj6mve6ef0lqp0143fc3ia98x',
});
const client = new ApolloClient({ networkInterface });

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assetsAreLoaded: false,
    };
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await Promise.all([
        Font.loadAsync([
          { 'Roboto': require('native-base/Fonts/Roboto.ttf') },
          { 'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf') },
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

  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <ApolloProvider client={client}>
          <View style={styles.container}>
            <RootNavigation />
          </View>
        </ApolloProvider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

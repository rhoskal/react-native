import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

import RootNavigation from './navigation/RootNavigation';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj6mve6ef0lqp0143fc3ia98x',
});
networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      if (AsyncStorage.getItem('graphcoolToken')) {
        req.options.headers.authorization = `Bearer ${AsyncStorage.getItem('graphcoolToken')}`;
      }
      next();
    },
  },
]);
const client = new ApolloClient({ networkInterface });

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={{ flex: 1 }}>
          <RootNavigation />
        </View>
      </ApolloProvider>
    );
  }
}

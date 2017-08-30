import React from 'react'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import ListPage from './src/ListPage'
import {
  View,
  TextInput,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj6wx7ujx00go0187jjw7uszo' })
const client = new ApolloClient({ networkInterface })

export default class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <ListPage />
      </ApolloProvider>
    )
  }
}

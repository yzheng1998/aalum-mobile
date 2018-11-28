import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { client } from './src/apollo'
import { ApolloProvider } from 'react-apollo'

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text>Welcome to the AAlum starter repo!</Text>
        </View>
      </ApolloProvider>
    )
  }
}

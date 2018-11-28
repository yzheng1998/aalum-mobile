import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './src/apollo'
import RootNavigator from './src/navigation/RootNavigator'

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    )
  }
}

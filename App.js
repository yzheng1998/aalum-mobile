import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components/native'
import { client } from './src/apollo'
import RootNavigator from './src/navigation/RootNavigator'
import theme from './theme'

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <RootNavigator />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

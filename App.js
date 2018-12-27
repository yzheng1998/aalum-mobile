import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components/native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { client } from './src/apollo'
import RootNavigator from './src/navigation/RootNavigator'
import theme from './theme'
import { YellowBox } from 'react-native'

export default class App extends Component {
  render() {
    YellowBox.ignoreWarnings([
      'Error: User cancelled image selection',
      'Remote debugger'
    ])
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RootNavigator />
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    )
  }
}

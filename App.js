import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components/native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { client } from './src/apollo'
import RootNavigator from './src/navigation/RootNavigator'
import theme from './theme'
import { YellowBox, AppState, AsyncStorage, Alert } from 'react-native'
import { setPosition } from './AppUtilities/geolocation'

export default class App extends Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)
    this.isSignedIn()
      .then(res => {
        if (res) {
          setPosition()
        }
      })
      .catch(() => Alert.alert('Could not identify if user is signed in'))
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  isSignedIn = async () => {
    const token = await AsyncStorage.getItem('token')
    return token !== null
  }

  handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      this.isSignedIn().then(res => {
        if (res) {
          setPosition()
        }
      })
    }
    /* if you try to set state when app is inactive, then the app resets
    when it becomes inactive (e.g. when permissions dialog opens) */
  }

  render() {
    YellowBox.ignoreWarnings([
      'Error: User cancelled image selection',
      'Remote debugger',
      'Failed prop type:'
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

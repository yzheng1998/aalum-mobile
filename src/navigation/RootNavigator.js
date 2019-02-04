import React, { Component } from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import RegistrationStack from './RegistrationStack'
import DiscoverStack from './DiscoverStack'
import { AsyncStorage, Alert } from 'react-native'
import LoadingWrapper from '../components/LoadingWrapper'

const isSignedIn = async () => {
  const token = await AsyncStorage.getItem('token')
  return token !== null
}

const createRootNavigator = (loggedIn = false) =>
  createSwitchNavigator(
    {
      Registration: {
        screen: RegistrationStack
      },
      Discover: {
        screen: DiscoverStack
      }
    },
    {
      initialRouteName: loggedIn ? 'Discover' : 'Registration',
      headerMode: 'screen'
    }
  )

export default class RootNavigator extends Component {
  state = {
    signedIn: false,
    loading: true
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, loading: false }))
      .catch(() => Alert.alert('An error occurred'))
  }
  render() {
    const { loading, signedIn } = this.state
    if (loading) {
      return <LoadingWrapper loading={loading} />
    }
    const RootNavigatorComponent = createAppContainer(
      createRootNavigator(signedIn)
    )
    return <RootNavigatorComponent />
  }
}

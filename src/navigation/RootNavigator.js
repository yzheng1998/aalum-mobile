import React, { Component } from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import RegistrationStack from './RegistrationStack'
import { AsyncStorage, Alert } from 'react-native'
import LoadingWrapper from '../components/LoadingWrapper'
import MainTabNavigator from './MainTabNavigator'

const createRootNavigator = (loggedIn = false) =>
  createSwitchNavigator(
    {
      Registration: {
        screen: RegistrationStack
      },
      MainTab: {
        screen: MainTabNavigator
      }
    },
    {
      initialRouteName: loggedIn ? 'MainTab' : 'Registration',
      headerMode: 'screen'
    }
  )

export default class RootNavigator extends Component {
  state = {
    signedIn: false,
    loading: true
  }

  componentDidMount() {
    this.isSignedIn()
      .then(res => this.setState({ signedIn: res, loading: false }))
      .catch(() => Alert.alert('An error occurred'))
  }

  isSignedIn = async () => {
    const token = await AsyncStorage.getItem('token')
    return token !== null
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

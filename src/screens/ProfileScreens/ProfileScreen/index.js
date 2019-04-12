import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Button } from './styles'
import AboutButton from '../../../components/AboutButton'
import Screen from '../../../components/Screen'
import ScreenHeader from '../../../components/ScreenHeader'
import theme from '../../../../theme'

export default class ProfileScreen extends Component {
  logout = async () => {
    AsyncStorage.clear()
    this.props.navigation.navigate('SignIn')
  }

  render() {
    return (
      <Screen>
        <ScreenHeader
          navigation={this.props.navigation}
          title="My Account"
          showBack
        />
        <Button title="Logout" onPress={this.logout} />
        <AboutButton text="Edit Profile" />
        <AboutButton text="Settings" />
        <AboutButton text="Matchmakers" />
        <AboutButton text="Pennants" />
        <AboutButton
          text="Activate Boost"
          color={theme.colors.error}
          borderColor={theme.colors.error}
        />
        <AboutButton text="Upgrade to Premium" gradient color="white" />
      </Screen>
    )
  }
}

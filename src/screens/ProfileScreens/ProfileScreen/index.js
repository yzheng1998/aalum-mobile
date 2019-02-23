import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Screen, Button } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'

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
      </Screen>
    )
  }
}

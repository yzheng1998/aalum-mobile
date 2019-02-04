import React, { Component } from 'react'
import { Screen, Button } from './styles'
import { AsyncStorage } from 'react-native'

export default class SwipeScreen extends Component {
  logout = async () => {
    AsyncStorage.clear()
    this.props.navigation.navigate('SignIn')
  }

  render() {
    return (
      <Screen>
        <Button title="Logout" onPress={this.logout} />
      </Screen>
    )
  }
}

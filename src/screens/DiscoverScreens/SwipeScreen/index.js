import React, { Component } from 'react'
import { Screen, Button } from './styles'
import { AsyncStorage } from 'react-native'

export default class SwipeScreen extends Component {
  render() {
    return (
      <Screen>
        <Button
          title="Logout"
          onPress={async () => {
            AsyncStorage.clear()
            this.props.navigation.navigate('SignIn')
          }}
        />
      </Screen>
    )
  }
}

import React, { Component } from 'react'
import { Screen, Button } from './styles'
import { AsyncStorage } from 'react-native'
import UserCard from './components/UserCard'

const SAMPLE_URL =
  'https://cdn-images-1.medium.com/max/2000/0*bdhf1cch4Mjib3UL.jpg'

export default class SwipeScreen extends Component {
  logout = async () => {
    AsyncStorage.clear()
    this.props.navigation.navigate('SignIn')
  }

  render() {
    return (
      <Screen>
        <Button title="Logout" onPress={this.logout} />
        <UserCard picture={SAMPLE_URL} />
      </Screen>
    )
  }
}

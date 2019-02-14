import React, { Component } from 'react'
import { Screen, Button, ButtonContainer } from './styles'
import { AsyncStorage } from 'react-native'
import UserCard from './components/UserCard'
import SearchButton from './components/SearchButton'
import ScreenHeader from '../../../components/ScreenHeader'
import FilterButton from './components/FilterButton'
import MatchButton from '../../../components/MatchButton'

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
        <ScreenHeader navigation={this.props.navigation} title="Discover">
          <FilterButton navigation={this.props.navigation} />
        </ScreenHeader>
        <SearchButton navigation={this.props.navigation} />
        <UserCard navigation={this.props.navigation} picture={SAMPLE_URL} />
        <ButtonContainer>
          <MatchButton name="close" />
          <MatchButton name="heart" />
        </ButtonContainer>
      </Screen>
    )
  }
}

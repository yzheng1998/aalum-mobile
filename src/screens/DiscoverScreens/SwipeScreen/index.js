import React, { Component } from 'react'
import { Screen, ButtonContainer } from './styles'
import { AsyncStorage, View, Text } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import UserCard from './components/UserCard'
import SearchButton from './components/SearchButton'
import ScreenHeader from '../../../components/ScreenHeader'
import FilterButton from './components/FilterButton'
import MatchButton from '../../../components/MatchButton'

const SAMPLE_URL =
  'https://cdn-images-1.medium.com/max/2000/0*bdhf1cch4Mjib3UL.jpg'

const user = {
  name: 'Harley',
  age: '25',
  distance: '0.1',
  school: 'Harvard University',
  degree: 'B.A',
  year: '2021',
  picture: SAMPLE_URL
}

const cards = [user, user, user]

export default class SwipeScreen extends Component {
  constructor(props) {
    super(props)
    this.swipeCardRef = React.createRef()
  }

  logout = async () => {
    AsyncStorage.clear()
    this.props.navigation.navigate('SignIn')
  }

  handleYup = () => {}
  handleNope = () => {}

  render() {
    return (
      <Screen>
        <ScreenHeader navigation={this.props.navigation} title="Discover">
          <FilterButton navigation={this.props.navigation} />
        </ScreenHeader>
        <SearchButton navigation={this.props.navigation} />
        <SwipeCards
          ref={this.swipeCardRef}
          cards={cards}
          cardStyle={{ width: '80%' }}
          renderCard={cardData => (
            <UserCard navigation={this.props.navigation} cardData={cardData} />
          )}
          renderNoMoreCards={() => (
            <View>
              <Text>No more cards</Text>
            </View>
          )}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          on
        />
        {/* eslint-disable no-underscore-dangle */}
        <ButtonContainer>
          <MatchButton
            name="close"
            onPress={() => this.swipeCardRef.current._forceLeftSwipe()}
          />
          <MatchButton
            name="heart"
            onPress={() => this.swipeCardRef.current._forceRightSwipe()}
          />
        </ButtonContainer>
        {/* eslint-enable no-underscore-dangle */}
      </Screen>
    )
  }
}

import React, { Component } from 'react'
import { Screen, ButtonContainer } from './styles'
import { AsyncStorage } from 'react-native'
import Swiper from './components/Swiper'
import SearchButton from './components/SearchButton'
import ScreenHeader from '../../../components/ScreenHeader'
import FilterButton from './components/FilterButton'
import MatchButton from '../../../components/MatchButton'
import { Query } from 'react-apollo'
import { GET_USERS } from './queries'
import LoadingWrapper from '../../../components/LoadingWrapper'

export default class SwipeScreen extends Component {
  logout = async () => {
    AsyncStorage.clear()
    this.props.navigation.navigate('SignIn')
  }

  render() {
    return (
      <Screen>
        <ScreenHeader navigation={this.props.navigation} title="Discover">
          <FilterButton navigation={this.props.navigation} />
        </ScreenHeader>
        <SearchButton navigation={this.props.navigation} />
        <Query
          query={GET_USERS}
          variables={{
            substring: 'Stanford'
          }}
        >
          {({ loading, data }) => {
            if (loading) return <LoadingWrapper loading />
            const userData = data.users.nodes
            return (
              <Swiper
                ref={component => {
                  this.swiper = component
                }}
                userData={userData}
                navigation={this.props.navigation}
              />
            )
          }}
        </Query>
        <ButtonContainer>
          <MatchButton
            name="close"
            onPress={() => {
              this.swiper.swipeLeft()
            }}
          />
          <MatchButton
            name="heart"
            onPress={() => {
              this.swiper.swipeRight()
            }}
          />
        </ButtonContainer>
      </Screen>
    )
  }
}

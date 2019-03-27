import React, { Component } from 'react'
import { Screen, ButtonContainer } from './styles'
import { AsyncStorage, Alert } from 'react-native'
import Swiper from './components/Swiper'
import SearchButton from './components/SearchButton'
import ScreenHeader from '../../../components/ScreenHeader'
import FilterButton from './components/FilterButton'
import MatchButton from '../../../components/MatchButton'
import { Query } from 'react-apollo'
import { GET_DISCOVERY } from './queries'
import LoadingWrapper from '../../../components/LoadingWrapper'

export default class SwipeScreen extends Component {
  logout = async () => {
    AsyncStorage.clear()
    this.props.navigation.navigate('SignIn')
  }

  render() {
    return (
      <Query
        query={GET_DISCOVERY}
        variables={{
          offset: 1,
          limit: 50
        }}
        onError={error => {
          if (error) {
            Alert.alert('Encountered server error')
          }
        }}
      >
        {({ loading, data, refetch }) => {
          if (loading) return <LoadingWrapper loading />
          const userData = data ? data.discovery.nodes : []
          return (
            <Screen>
              <ScreenHeader navigation={this.props.navigation} title="Discover">
                <FilterButton
                  navigation={this.props.navigation}
                  discoveryRefetch={refetch}
                />
              </ScreenHeader>
              <SearchButton navigation={this.props.navigation} />
              <Swiper
                ref={component => {
                  this.swiper = component
                }}
                userData={userData}
                navigation={this.props.navigation}
                discoveryRefetch={refetch}
              />
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
        }}
      </Query>
    )
  }
}

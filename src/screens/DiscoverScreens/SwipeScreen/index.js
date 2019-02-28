import React, { Component } from 'react'
import { Screen, ButtonContainer, Container } from './styles'
import { AsyncStorage } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import UserCard from './components/UserCard'
import SearchButton from './components/SearchButton'
import ScreenHeader from '../../../components/ScreenHeader'
import FilterButton from './components/FilterButton'
import EmptyState from './components/EmptyState'
import MatchButton from '../../../components/MatchButton'
import { Query } from 'react-apollo'
import { GET_USERS } from './queries'
import LoadingWrapper from '../../../components/LoadingWrapper'

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
        <Query
          query={GET_USERS}
          variables={{
            substring: ''
          }}
        >
          {({ loading, data }) => {
            if (loading) return <LoadingWrapper loading />
            const userData = data.users.nodes
            return (
              <Container>
                <SwipeCards
                  onClickHandler={() => {}}
                  ref={this.swipeCardRef}
                  cards={userData}
                  cardStyle={{ width: '87%' }}
                  renderCard={cardData => (
                    <UserCard
                      navigation={this.props.navigation}
                      cardData={cardData}
                    />
                  )}
                  renderNoMoreCards={() => <EmptyState />}
                  yupStyle={{ borderColor: 'rgba(0,0,0,0)', outline: 'none' }}
                  nopeStyle={{ borderColor: 'rgba(0,0,0,0)', outline: 'none' }}
                  yupView={<MatchButton disabled name="heart" />}
                  noView={<MatchButton disabled name="close" />}
                  handleYup={this.handleYup}
                  handleNope={this.handleNope}
                  on
                />
              </Container>
            )
          }}
        </Query>
        {/* eslint-disable no-underscore-dangle */}
        <ButtonContainer>
          <MatchButton
            name="close"
            onPress={() => {
              this.swipeCardRef.current._forceLeftSwipe()
              this.handleNope()
            }}
          />
          <MatchButton
            name="heart"
            onPress={() => {
              this.swipeCardRef.current._forceRightSwipe()
              this.handleYup()
            }}
          />
        </ButtonContainer>
        {/* eslint-enable no-underscore-dangle */}
      </Screen>
    )
  }
}

import React, { Component } from 'react'
import { Container } from './styles'
import SwipeCards from 'react-native-swipe-cards'

import UserCard from '../UserCard'
import EmptyState from '../EmptyState'
import MatchButton from '../../../../../components/MatchButton'
import { Mutation } from 'react-apollo'
import { SEND_MATCH_RESPONSE } from './mutations'

export default class Swiper extends Component {
  constructor(props) {
    super(props)
    this.swipeCardRef = React.createRef()
  }

  swipeLeft = () => {
    this.swipeCardRef.current._forceLeftSwipe()
  }

  swipeRight = () => {
    this.swipeCardRef.current._forceRightSwipe()
  }

  render() {
    const { userData } = this.props
    return (
      <Container>
        <Mutation mutation={SEND_MATCH_RESPONSE}>
          {sendMatchResponse => (
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
              handleYup={cardData => {
                const variables = { recipient: cardData.id, swipedRight: true }
                sendMatchResponse({ variables })
              }}
              handleNope={cardData => {
                const variables = { recipient: cardData.id, swipedRight: false }
                sendMatchResponse({ variables })
              }}
            />
          )}
        </Mutation>
      </Container>
    )
  }
}

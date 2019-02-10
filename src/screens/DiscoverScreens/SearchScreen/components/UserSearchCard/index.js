import React, { Component } from 'react'
import { Container, ContentContainer, HeartContainer } from './styles'
import Heart from '../../../../../components/Heart'
import UserSearchCardPicture from './components/UserSearchCardPicture'
import UserSearchCardDetails from './components/UserSearchCardDetails'

class UserSearchCard extends Component {
  render() {
    return (
      <Container>
        <ContentContainer>
          <UserSearchCardPicture />
          <UserSearchCardDetails />
          <HeartContainer>
            <Heart active width="28px" height="24.25px" />
          </HeartContainer>
        </ContentContainer>
      </Container>
    )
  }
}

export default UserSearchCard

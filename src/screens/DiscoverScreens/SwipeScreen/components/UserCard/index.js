import React, { Component } from 'react'
import { Container, LargeContainer } from './styles'
import UserCardPicture from './components/UserCardPicture'
import UserCardBio from './components/UserCardBio'

export default class UserCard extends Component {
  render() {
    return (
      <LargeContainer>
        <Container>
          <UserCardPicture source="https://cdn-images-1.medium.com/max/2000/0*bdhf1cch4Mjib3UL.jpg" />
        </Container>
        <UserCardBio
          name="Harley"
          age="25"
          distance="0.1"
          school="Harvard University"
          degree="B.A"
          year="2021"
        />
      </LargeContainer>
    )
  }
}

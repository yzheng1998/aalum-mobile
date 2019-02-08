import React, { Component } from 'react'
import { Container, LargeContainer } from './styles'
import UserCardPicture from './components/UserCardPicture'
import UserCardBio from './components/UserCardBio'
import { Dimensions } from 'react-native'

const SAMPLE_URL =
  'https://cdn-images-1.medium.com/max/2000/0*bdhf1cch4Mjib3UL.jpg'

const { height } = Dimensions.get('window')
export default class UserCard extends Component {
  render() {
    return (
      <LargeContainer>
        <Container height={height * 0.465}>
          <UserCardPicture source={SAMPLE_URL} />
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

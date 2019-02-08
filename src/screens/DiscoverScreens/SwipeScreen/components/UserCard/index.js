import React from 'react'
import { LargeContainer } from './styles'
import UserCardPicture from './components/UserCardPicture'
import UserCardBio from './components/UserCardBio'

const UserCard = ({ picture }) => (
  <LargeContainer>
    <UserCardPicture source={picture} />
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

export default UserCard

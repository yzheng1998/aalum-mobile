import React from 'react'
import { TouchableOpacity } from './styles'
import UserCardPicture from './components/UserCardPicture'
import UserCardBio from './components/UserCardBio'

const UserCard = ({ picture, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('User')}>
    <UserCardPicture source={picture} />
    <UserCardBio
      name="Harley"
      age="25"
      distance="0.1"
      school="Harvard University"
      degree="B.A"
      year="2021"
    />
  </TouchableOpacity>
)

export default UserCard

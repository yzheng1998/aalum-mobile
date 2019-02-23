import React from 'react'
import { TouchableOpacity } from './styles'
import UserCardPicture from './components/UserCardPicture'
import UserCardBio from './components/UserCardBio'

const UserCard = ({ cardData, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('User')}>
    <UserCardPicture source={cardData.picture} />
    <UserCardBio {...cardData} />
  </TouchableOpacity>
)

export default UserCard

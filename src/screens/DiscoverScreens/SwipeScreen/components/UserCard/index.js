import React from 'react'
import { TouchableOpacity } from './styles'
import UserCardPicture from './components/UserCardPicture'
import UserCardBio from './components/UserCardBio'

const UserCard = ({ cardData, navigation, discoveryRefetch }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={() =>
      navigation.navigate('User', { id: cardData.id, discoveryRefetch })
    }
  >
    <UserCardPicture source={cardData.profilePicture} />
    <UserCardBio {...cardData} />
  </TouchableOpacity>
)

export default UserCard

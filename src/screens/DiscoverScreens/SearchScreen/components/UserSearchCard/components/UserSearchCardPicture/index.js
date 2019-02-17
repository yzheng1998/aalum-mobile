import React from 'react'
import { Pic } from './styles'

const UserSearchCardPicture = ({ profilePicture }) => (
  <Pic
    source={{
      uri: profilePicture
    }}
  />
)

export default UserSearchCardPicture

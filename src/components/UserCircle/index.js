import React from 'react'
import { Picture } from './styles'

const UserCircle = ({ profilePicture, diameter }) => (
  <Picture
    diameter={diameter}
    source={{
      uri: profilePicture || ''
    }}
  />
)

export default UserCircle

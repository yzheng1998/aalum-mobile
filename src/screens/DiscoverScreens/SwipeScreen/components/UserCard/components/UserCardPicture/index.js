import React from 'react'
import { Container, Picture } from './styles'

const UserCardPicture = ({ source }) => (
  <Container>
    <Picture source={{ uri: source }} />
  </Container>
)

export default UserCardPicture

import React from 'react'
import { Container, Bio } from './styles'

const UserBio = ({ info }) => (
  <Container>
    <Bio>{info}</Bio>
  </Container>
)

export default UserBio

import React from 'react'
import { Container, CloseIcon, HeartIcon } from './styles'

const MatchButton = ({ name }) => (
  <Container>
    {name === 'heart' ? <HeartIcon name="heart" /> : <CloseIcon name="close" />}
  </Container>
)

export default MatchButton

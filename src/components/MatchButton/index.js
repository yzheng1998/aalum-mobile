import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, CloseIcon, HeartIcon } from './styles'

const MatchButton = ({ name, onPress }) => (
  <Container>
    <TouchableOpacity onPress={onPress}>
      {name === 'heart' ? (
        <HeartIcon name="heart" />
      ) : (
        <CloseIcon name="close" />
      )}
    </TouchableOpacity>
  </Container>
)

export default MatchButton

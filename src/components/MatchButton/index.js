import React from 'react'
import { CloseIcon, HeartIcon, Button } from './styles'

const MatchButton = ({ name, onPress, disabled }) => (
  <Button onPress={onPress} disabled={disabled}>
    {name === 'heart' ? <HeartIcon name="heart" /> : <CloseIcon name="close" />}
  </Button>
)

export default MatchButton

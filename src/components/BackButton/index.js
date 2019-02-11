import React from 'react'
import Icon from '../Icon'
import { Button } from './styles'
import { buttonRadius } from '../../../constants'

const BackButton = ({ onPress, color, style }) => (
  <Button hitSlop={buttonRadius} onPress={onPress} style={style}>
    <Icon name="arrow-back" color={color} size={30} />
  </Button>
)

export default BackButton

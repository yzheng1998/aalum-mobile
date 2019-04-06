import React from 'react'
import { Button, ButtonText } from './styles'

const ToggleButton = ({ title, addOrRemoveValue, isSelected, disabled }) => (
  <Button
    disabled={disabled}
    onPress={() => addOrRemoveValue(title)}
    isSelected={isSelected}
  >
    <ButtonText isSelected={isSelected}>{title}</ButtonText>
  </Button>
)

export default ToggleButton

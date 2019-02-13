import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class ToggleButton extends Component {
  render() {
    const { title, onPress, isSelected, disabled } = this.props
    return (
      <Button
        disabled={disabled}
        onPress={() => onPress(title)}
        isSelected={isSelected}
      >
        <ButtonText isSelected={isSelected}>{title}</ButtonText>
      </Button>
    )
  }
}

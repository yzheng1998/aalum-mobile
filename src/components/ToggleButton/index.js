import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class ToggleButton extends Component {
  render() {
    const { title, select, isSelected, disabled } = this.props
    return (
      <Button disabled={disabled} onPress={select} isSelected={isSelected}>
        <ButtonText isSelected={isSelected}>{title}</ButtonText>
      </Button>
    )
  }
}

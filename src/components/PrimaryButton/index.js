import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class PrimaryButton extends Component {
  render() {
    const { title, onPress, disabled } = this.props
    return (
      <Button onPress={onPress} disabled={disabled}>
        <ButtonText>{title}</ButtonText>
      </Button>
    )
  }
}

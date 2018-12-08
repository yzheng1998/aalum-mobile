import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class GenderButton extends Component {
  render() {
    const { title, selectGender, selected, disabled } = this.props
    return (
      <Button disabled={disabled} onPress={selectGender} selected={selected}>
        <ButtonText selected={selected}>{title}</ButtonText>
      </Button>
    )
  }
}

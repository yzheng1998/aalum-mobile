import React, { Component } from 'react'
import { Button, Text } from './styles'

export default class TextButton extends Component {
  render() {
    const { text, ...rest } = this.props
    return (
      <Button {...rest}>
        <Text>{text}</Text>
      </Button>
    )
  }
}

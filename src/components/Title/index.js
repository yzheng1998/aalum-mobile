import React, { Component } from 'react'
import { Text } from './styles'

export default class Title extends Component {
  render() {
    const { text } = this.props
    return <Text>{text}</Text>
  }
}

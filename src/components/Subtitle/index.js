import React, { Component } from 'react'
import { Text } from './styles'

export default class Subtitle extends Component {
  render() {
    const { text } = this.props
    return <Text>{text}</Text>
  }
}

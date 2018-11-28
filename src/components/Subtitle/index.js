import React, { Component } from 'react'
import { Text } from './styles'

export default class Subtitle extends Component {
  render() {
    return <Text>{this.props.text}</Text>
  }
}

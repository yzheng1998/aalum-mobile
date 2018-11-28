import React, { Component } from 'react'
import { Text } from './styles'

export default class Title extends Component {
  render() {
    return <Text>{this.props.text}</Text>
  }
}

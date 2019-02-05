import React, { Component } from 'react'
import { Container, Picture } from './styles'

export default class UserCardPicture extends Component {
  render() {
    const { source } = this.props
    return (
      <Container>
        <Picture source={{ uri: source }} />
      </Container>
    )
  }
}

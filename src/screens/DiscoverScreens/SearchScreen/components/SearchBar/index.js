import React, { Component } from 'react'
import { Container, Input } from './styles'
import Icon from '../../../../../components/Icon'
import theme from '../../../../../../theme'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Container>
        <Icon
          name="search"
          size={20}
          borderRadius={10}
          color={theme.colors.mediumGrey}
        />
        <Input
          onKeyPress={text => this.setState({ text })}
          placeholder="Search"
        />
      </Container>
    )
  }
}

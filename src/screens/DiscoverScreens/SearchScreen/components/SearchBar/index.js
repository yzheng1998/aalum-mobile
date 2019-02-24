import React, { Component } from 'react'
import { Container, Input } from './styles'
import Icon from '../../../../../components/Icon'
import theme from '../../../../../../theme'

export default class SearchBar extends Component {
  render() {
    const { updateState } = this.props
    return (
      <Container activeOpacity={1} onPress={() => this.textInput.focus()}>
        <Icon
          name="search"
          size={20}
          borderRadius={10}
          color={theme.colors.mediumGrey}
        />
        <Input
          autoCorrect={false}
          autoFocus
          ref={component => {
            this.textInput = component
          }}
          onChangeText={text => updateState({ text })}
          placeholder="Search"
        />
      </Container>
    )
  }
}

import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Title } from './styles'
import Icon from '../../../../../components/Icon'
import theme from '../../../../../../theme'

export default class SearchButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Search')}
      >
        <Container>
          <Icon
            name="search"
            size={20}
            borderRadius={10}
            color={theme.colors.mediumGrey}
          />
          <Title>Search for a user</Title>
        </Container>
      </TouchableOpacity>
    )
  }
}

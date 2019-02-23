import React from 'react'
import { Container, Input } from './styles'
import Icon from '../../../../../components/Icon'
import theme from '../../../../../../theme'

export const SearchBar = ({ updateState }) => (
  <Container>
    <Icon
      name="search"
      size={20}
      borderRadius={10}
      color={theme.colors.mediumGrey}
    />
    <Input onChangeText={text => updateState({ text })} placeholder="Search" />
  </Container>
)

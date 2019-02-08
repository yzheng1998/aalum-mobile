import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Title } from './styles'
import Icon from '../../../../../components/Icon'
import theme from '../../../../../../theme'

const SearchButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Search')}>
    <Container>
      <Icon name="search" size={20} color={theme.colors.mediumGrey} />
      <Title>Search for a user</Title>
    </Container>
  </TouchableOpacity>
)

export default SearchButton

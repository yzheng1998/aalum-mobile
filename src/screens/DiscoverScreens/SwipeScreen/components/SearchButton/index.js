import React from 'react'
import { Container, Title, Button } from './styles'
import Icon from '../../../../../components/Icon'
import theme from '../../../../../../theme'

const SearchButton = ({ navigation }) => (
  <Button onPress={() => navigation.navigate('Search')}>
    <Container>
      <Icon name="search" size={20} color={theme.colors.mediumGrey} />
      <Title>Search for a user</Title>
    </Container>
  </Button>
)

export default SearchButton

import React from 'react'
import { Button } from './styles'
import Icon from '../../../../../components/Icon'

const FilterButton = ({ navigation, discoveryRefetch }) => (
  <Button onPress={() => navigation.navigate('Filter', { discoveryRefetch })}>
    <Icon name="options" size={35} />
  </Button>
)

export default FilterButton

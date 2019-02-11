import React from 'react'
import { Button } from './styles'
import Icon from '../../../../../components/Icon'

const FilterButton = ({ navigation }) => (
  <Button onPress={() => navigation.navigate('Filter')}>
    <Icon name="options" size={35} />
  </Button>
)

export default FilterButton

import React from 'react'
import DropdownList from './components/DropdownList'
import { Container, Title } from './styles'

const DropdownData = ({ selectedItems, items, onChange, title, text }) => (
  <Container>
    <Title>{title}</Title>
    <DropdownList
      selectedItems={selectedItems}
      items={items}
      onChange={onChange}
      text={text}
    />
  </Container>
)

export default DropdownData

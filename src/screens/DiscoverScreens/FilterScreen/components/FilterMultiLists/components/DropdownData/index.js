import React, { Component } from 'react'
import DropdownList from './components/DropdownList'
import { Container, Title } from './styles'

class DropdownData extends Component {
  render() {
    const { selectedItems, items, onChange, title, text } = this.props
    return (
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
  }
}

export default DropdownData

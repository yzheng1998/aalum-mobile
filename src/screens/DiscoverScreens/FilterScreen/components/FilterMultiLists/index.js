import React from 'react'
import DropdownData from './components/DropdownData'
import { Container } from './styles'

const FilterMultiLists = ({ lists }) => (
  <Container>
    {lists.map(data => (
      <Container key={data.key}>
        {
          <DropdownData
            title={data.title}
            selectedItems={data.selectedItems}
            items={data.items}
            onChange={data.onChange}
            text={data.text}
          />
        }
      </Container>
    ))}
  </Container>
)

export default FilterMultiLists

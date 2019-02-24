import React from 'react'
import {
  enumToString,
  degreeAbbrEnumToString
} from '../../../../../../enumMappings'
import { Container, RowContainer, NameText, DetailsText, Icn } from './styles'

const UserSummary = ({
  name,
  age,
  distance,
  school,
  degree,
  year,
  professions
}) => {
  const rows = [
    {
      key: 'distance',
      iconName: 'pin',
      content: `${distance || 'Many'} mile${distance !== 1 ? 's' : ''} away`
    },
    {
      key: 'education',
      iconName: 'school',
      content: school
        ? `${school}, ${degreeAbbrEnumToString(degree)} ${year}`
        : ''
    },
    {
      key: 'profession',
      iconName: 'briefcase',
      content: professions && professions[0] ? enumToString(professions[0]) : ''
    }
  ]

  return (
    <Container>
      <NameText>{`${name}, ${age}`}</NameText>
      {rows.map(
        row =>
          row.content !== '' && (
            <RowContainer key={row.key}>
              <Icn name={row.iconName} fixedWidth />
              <DetailsText>{row.content}</DetailsText>
            </RowContainer>
          )
      )}
    </Container>
  )
}

export default UserSummary

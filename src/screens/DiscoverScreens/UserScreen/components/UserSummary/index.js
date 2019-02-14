import React from 'react'
import { enumToString } from '../../../../../../enumMappings'
import { Container, RowContainer, NameText, DetailsText, Icn } from './styles'

const UserSummary = ({
  name,
  age,
  distance,
  school,
  degree,
  year,
  profession
}) => {
  const rows = [
    { key: 'distance', iconName: 'pin', content: `${distance} miles away` },
    {
      key: 'education',
      iconName: 'school',
      content: `${school}, ${enumToString(degree)} ${year}`
    },
    {
      key: 'profession',
      iconName: 'briefcase',
      content: `${enumToString(profession)}`
    }
  ]

  return (
    <Container>
      <NameText>{`${name}, ${age}`}</NameText>
      {rows.map(row => (
        <RowContainer key={row.key}>
          <Icn name={row.iconName} fixedWidth />
          <DetailsText>{row.content}</DetailsText>
        </RowContainer>
      ))}
    </Container>
  )
}

export default UserSummary

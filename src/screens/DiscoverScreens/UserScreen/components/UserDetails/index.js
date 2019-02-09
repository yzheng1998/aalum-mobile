import React from 'react'
import UserDetailsRow from './components/UserDetailsRow'
import { Container, DetailsContainer } from './styles'
import { enumToString } from '../../../../../../enumMappings'

const UserDetails = ({
  gender,
  ethnicity,
  languages,
  height,
  bodyType,
  interests
}) => {
  const enumsToStrs = (name, arr) =>
    arr.map(elt => enumToString(name, elt)).join(', ')

  const details = [
    { title: 'Gender', content: enumsToStrs('gender', gender) },
    { title: 'Ethnicity', content: enumsToStrs('ethnicity', ethnicity) },
    { title: 'Languages', content: enumsToStrs('languages', languages) },
    { title: 'Height', content: height },
    { title: 'Body Type', content: enumsToStrs('bodyType', bodyType) },
    { title: 'Interests', content: enumsToStrs('interests', interests) }
  ]

  const rows = details.map(detail => (
    <UserDetailsRow
      key={detail.title}
      title={detail.title}
      content={detail.content}
    />
  ))

  return (
    <Container>
      <DetailsContainer>{rows}</DetailsContainer>
    </Container>
  )
}

export default UserDetails

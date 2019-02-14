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
  const enumsToStrs = arr => arr.map(elt => enumToString(elt)).join(', ')

  const details = [
    { title: 'Gender', content: enumsToStrs(gender) },
    { title: 'Ethnicity', content: enumsToStrs(ethnicity) },
    { title: 'Languages', content: enumsToStrs(languages) },
    { title: 'Height', content: height },
    { title: 'Body Type', content: enumsToStrs(bodyType) },
    { title: 'Interests', content: enumsToStrs(interests) }
  ]

  return (
    <Container>
      <DetailsContainer>
        {details.map(detail => (
          <UserDetailsRow
            key={detail.title}
            title={detail.title}
            content={detail.content}
          />
        ))}
      </DetailsContainer>
    </Container>
  )
}

export default UserDetails

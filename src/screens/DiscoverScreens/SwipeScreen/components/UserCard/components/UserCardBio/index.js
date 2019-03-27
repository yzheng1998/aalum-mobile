import React from 'react'
import { Container, Title, DistanceText, EducationTitle } from './styles'
import { enumToString } from '../../../../../../../../enumMappings'

const UserCardBio = ({ name, age, distance, educations }) => {
  const { schoolName, degreeType, year } =
    educations && educations[0] ? educations[0] : {}
  const degreeTypeString = enumToString(degreeType || '')
  return (
    <Container>
      <Title>{`${name || ''}, ${age || ''}`}</Title>
      <DistanceText>
        {`${distance || 'Many'} mile${distance !== 1 ? 's' : ''} away`}
      </DistanceText>
      <EducationTitle>
        {`${schoolName || ''}${
          schoolName && (degreeTypeString || year) ? ', ' : ''
        }${degreeTypeString || ''}${
          degreeTypeString && year ? ', ' : ''
        }${year || ''}`}
      </EducationTitle>
    </Container>
  )
}

export default UserCardBio

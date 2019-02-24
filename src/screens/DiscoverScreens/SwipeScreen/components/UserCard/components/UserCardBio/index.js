import React from 'react'
import { Container, Title, DistanceText, EducationTitle } from './styles'

const UserCardBio = ({ name, age, distance, school, degree, year }) => (
  <Container>
    <Title>{`${name || ''}, ${age || ''}`}</Title>
    <DistanceText>
      {`${distance || 'Many'} mile${distance !== 1 ? 's' : ''} away`}
    </DistanceText>
    <EducationTitle>
      {school && `${school || ''}, ${degree || ''}, ${year || ''}`}
    </EducationTitle>
  </Container>
)

export default UserCardBio

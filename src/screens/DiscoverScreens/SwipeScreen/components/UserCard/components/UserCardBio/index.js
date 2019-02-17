import React from 'react'
import { Container, Title, DistanceText, EducationTitle } from './styles'

const UserCardBio = ({ name, age, distance, school, degree, year }) => (
  <Container>
    <Title>{`${name}, ${age}`}</Title>
    <DistanceText>{`${distance} miles away`}</DistanceText>
    <EducationTitle>{`${school}, ${degree}, ${year}`}</EducationTitle>
  </Container>
)

export default UserCardBio

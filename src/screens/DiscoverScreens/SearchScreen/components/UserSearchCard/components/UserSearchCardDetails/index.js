import React from 'react'
import { Container, NameText, LocationText, EducationText } from './styles'

const UserSearchCardDetails = ({
  name,
  age,
  location,
  school,
  degree,
  year
}) => (
  <Container>
    <NameText>{`${name}, ${age}`}</NameText>
    <LocationText>{location}</LocationText>
    <EducationText>{`${school}, ${degree} ${year}`}</EducationText>
  </Container>
)

export default UserSearchCardDetails

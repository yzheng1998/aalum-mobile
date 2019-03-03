import React from 'react'
import { Container, NameText, LocationText, EducationText } from './styles'

const UserSearchCardDetails = ({
  name,
  age,
  locationName,
  school,
  degree,
  year
}) => (
  <Container>
    <NameText>{`${name || ''}, ${age || ''}`}</NameText>
    <LocationText>{locationName || ''}</LocationText>
    <EducationText>
      {`${school || ''}${school && (degree || year) ? ', ' : ''}${degree ||
        ''}${degree && year ? ', ' : ''}${year || ''}`}
    </EducationText>
  </Container>
)

export default UserSearchCardDetails

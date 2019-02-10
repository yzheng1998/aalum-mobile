import React, { Component } from 'react'
import { Container, NameText, LocationText, EducationText } from './styles'

class UserSearchCardDetails extends Component {
  render() {
    return (
      <Container>
        <NameText>Arthur, 39</NameText>
        <LocationText>Atlantis, FL</LocationText>
        <EducationText>University of Florida, B.A. 2001</EducationText>
      </Container>
    )
  }
}

export default UserSearchCardDetails

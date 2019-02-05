import React, { Component } from 'react'
import { Container, Title, DistanceText, EducationTitle } from './styles'

export default class UserCardBio extends Component {
  render() {
    const { name, age, distance, school, degree, year } = this.props
    return (
      <Container>
        <Title>{`${name}, ${age}`}</Title>
        <DistanceText>{`${distance} miles away`}</DistanceText>
        <EducationTitle>{`${school}, ${degree}, ${year}`}</EducationTitle>
      </Container>
    )
  }
}

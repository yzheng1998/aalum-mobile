import React from 'react'
import { Container, ContentContainer } from './styles'
import UserCardPicture from './components/UserCardPicture'
import UserCardDetails from './components/UserCardDetails'

const UserCard = ({
  profilePicture,
  name,
  age,
  locationName,
  school,
  degree,
  year,
  children,
  onPress
}) => (
  <Container onPress={onPress}>
    <ContentContainer>
      <UserCardPicture profilePicture={profilePicture} />
      <UserCardDetails
        name={name}
        age={age}
        locationName={locationName}
        school={school}
        degree={degree}
        year={year}
      />
      {children}
    </ContentContainer>
  </Container>
)

export default UserCard

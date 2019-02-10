import React from 'react'
import { Container, ContentContainer, HeartContainer } from './styles'
import Heart from '../../../../../components/Heart'
import UserSearchCardPicture from './components/UserSearchCardPicture'
import UserSearchCardDetails from './components/UserSearchCardDetails'

const UserSearchCard = ({
  profilePicture,
  name,
  age,
  location,
  school,
  degree,
  year,
  isInterested
}) => (
  <Container>
    <ContentContainer>
      <UserSearchCardPicture profilePicture={profilePicture} />
      <UserSearchCardDetails
        name={name}
        age={age}
        location={location}
        school={school}
        degree={degree}
        year={year}
      />
      <HeartContainer>
        <Heart active={isInterested} width="28px" height="24.25px" />
      </HeartContainer>
    </ContentContainer>
  </Container>
)

export default UserSearchCard

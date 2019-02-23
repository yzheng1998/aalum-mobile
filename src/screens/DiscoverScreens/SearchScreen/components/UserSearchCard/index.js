import React from 'react'
import { Container, ContentContainer, HeartContainer } from './styles'
import Heart from '../../../../../components/Heart'
import UserSearchCardPicture from './components/UserSearchCardPicture'
import UserSearchCardDetails from './components/UserSearchCardDetails'

const UserSearchCard = ({
  id,
  profilePicture,
  name,
  age,
  location,
  school,
  degree,
  year,
  isInterested,
  navigation
}) => (
  <Container onPress={() => navigation.navigate('User', { id })}>
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

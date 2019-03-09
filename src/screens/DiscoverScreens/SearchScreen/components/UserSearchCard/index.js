import React from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import { Container, ContentContainer, HeartContainer } from './styles'
import Heart from '../../../../../components/Heart'
import UserSearchCardPicture from './components/UserSearchCardPicture'
import UserSearchCardDetails from './components/UserSearchCardDetails'
import { SEND_MATCH_RESPONSE } from './mutations'
import { Mutation } from 'react-apollo'

const UserSearchCard = ({
  id,
  profilePicture,
  name,
  age,
  locationName,
  school,
  degree,
  year,
  swipedRight,
  navigation,
  refetch
}) => (
  <Container
    onPress={() => navigation.navigate('User', { id, searchRefetch: refetch })}
  >
    <ContentContainer>
      <UserSearchCardPicture profilePicture={profilePicture} />
      <UserSearchCardDetails
        name={name}
        age={age}
        locationName={locationName}
        school={school}
        degree={degree}
        year={year}
      />
      <HeartContainer>
        <Mutation
          mutation={SEND_MATCH_RESPONSE}
          onCompleted={() => refetch()}
          onError={error => {
            if (error) {
              Alert.alert('Encountered server error')
            }
          }}
        >
          {sendMatchResponse => {
            const variables = { recipient: id, swipedRight: !swipedRight }
            return (
              <TouchableOpacity
                onPress={() => sendMatchResponse({ variables })}
              >
                <Heart active={swipedRight} width="28px" height="24.25px" />
              </TouchableOpacity>
            )
          }}
        </Mutation>
      </HeartContainer>
    </ContentContainer>
  </Container>
)

export default UserSearchCard

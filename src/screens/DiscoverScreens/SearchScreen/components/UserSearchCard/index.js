import React from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import { HeartContainer } from './styles'
import Heart from '../../../../../components/Heart'
import UserCard from '../../../../../components/UserCard'
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
  <UserCard
    onPress={() => navigation.navigate('User', { id, searchRefetch: refetch })}
    profilePicture={profilePicture}
    name={name}
    age={age}
    locationName={locationName}
    school={school}
    degree={degree}
    year={year}
  >
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
            <TouchableOpacity onPress={() => sendMatchResponse({ variables })}>
              <Heart active={swipedRight} width="28px" height="24.25px" />
            </TouchableOpacity>
          )
        }}
      </Mutation>
    </HeartContainer>
  </UserCard>
)

export default UserSearchCard

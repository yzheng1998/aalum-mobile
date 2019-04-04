import React from 'react'
import { Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MatchButton from '../../../../../components/MatchButton'
import {
  InnerContainer,
  Container,
  gradientStyle,
  ButtonContainer
} from './styles'
import theme from '../../../../../../theme'
import { Mutation } from 'react-apollo'
import { SEND_MATCH_RESPONSE } from './mutations'

const MatchButtons = ({
  recipient,
  refetch,
  navigation,
  searchRefetch,
  discoveryRefetch
}) => {
  const { buttonShadow1, buttonShadow2, offWhite } = theme.colors
  return (
    <Container>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[buttonShadow1, buttonShadow2, offWhite]}
        locations={[0, 0.3415, 1]}
        style={gradientStyle}
      >
        <InnerContainer>
          <ButtonContainer>
            <Mutation
              mutation={SEND_MATCH_RESPONSE}
              onCompleted={() => {
                refetch()
                if (searchRefetch) searchRefetch()
                if (discoveryRefetch) discoveryRefetch()
                navigation.goBack()
              }}
              onError={error => {
                if (error) {
                  Alert.alert('Encountered server error')
                }
              }}
            >
              {sendMatchResponse => {
                const variables = { recipient, swipedRight: false }
                return (
                  <MatchButton
                    name="close"
                    onPress={() => sendMatchResponse({ variables })}
                  />
                )
              }}
            </Mutation>
            <Mutation
              mutation={SEND_MATCH_RESPONSE}
              onCompleted={() => {
                refetch()
                if (searchRefetch) searchRefetch()
                if (discoveryRefetch) discoveryRefetch()
              }}
            >
              {sendMatchResponse => {
                const variables = { recipient, swipedRight: true }
                return (
                  <MatchButton
                    name="heart"
                    onPress={() => sendMatchResponse({ variables })}
                  />
                )
              }}
            </Mutation>
          </ButtonContainer>
        </InnerContainer>
      </LinearGradient>
    </Container>
  )
}

export default MatchButtons

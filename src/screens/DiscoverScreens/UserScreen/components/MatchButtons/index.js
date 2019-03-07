import React, { Component } from 'react'
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

export default class MatchButtons extends Component {
  render() {
    const { buttonShadow1, buttonShadow2, offWhite } = theme.colors
    const { recipient, refetch, navigation, searchRefetch } = this.props
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
                  navigation.goBack()
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
                  navigation.goBack()
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
}

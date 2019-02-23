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

export default class MatchButtons extends Component {
  render() {
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
              <MatchButton name="close" />
              <MatchButton name="heart" />
            </ButtonContainer>
          </InnerContainer>
        </LinearGradient>
      </Container>
    )
  }
}

import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  InnerContainer,
  Container,
  Button,
  ButtonText,
  outerGradientStyle,
  innerGradientStyle
} from './styles'
import theme from '../../../theme'

export default class PrimaryButton extends Component {
  onPress = () => {
    this.props.onPress()
  }

  render() {
    const { title, disabled, children, ...rest } = this.props
    const {
      buttonShadow1,
      buttonShadow2,
      offWhite,
      gradientLeft,
      gradientRight
    } = theme.colors
    return (
      <Container>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[buttonShadow1, buttonShadow2, offWhite]}
          locations={[0, 0.3415, 1]}
          style={outerGradientStyle}
        >
          <InnerContainer>
            <Button disabled={disabled} {...rest}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[gradientLeft, gradientRight]}
                style={{
                  ...innerGradientStyle,
                  opacity: disabled ? 0.6 : 1,
                  flexDirection: 'row'
                }}
              >
                {children}
                <ButtonText>{title}</ButtonText>
              </LinearGradient>
            </Button>
          </InnerContainer>
        </LinearGradient>
      </Container>
    )
  }
}

import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Button, ButtonText, gradientStyle } from './styles'
import theme from '../../../theme'

export default class PrimaryButton extends Component {
  render() {
    const { title, ...rest } = this.props
    const { gradientLeft, gradientRight } = theme.colors
    return (
      <Button {...rest}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[gradientLeft, gradientRight]}
          style={gradientStyle}
        >
          <ButtonText>{title}</ButtonText>
        </LinearGradient>
      </Button>
    )
  }
}

import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Button, ButtonText, gradientStyle } from './styles'
import theme from '../../../theme'

export default class PrimaryButton extends Component {
  render() {
    const { title, onPress, disabled } = this.props
    const { gradientLeft, gradientRight } = theme.colors
    return (
      <Button onPress={onPress} disabled={disabled}>
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

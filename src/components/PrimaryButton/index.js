import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Button, ButtonText, gradientStyle } from './styles'
import theme from '../../../theme'

export default class PrimaryButton extends Component {
  onPress = () => {
    this.props.onPress()
  }

  render() {
    const { title, disabled, ...rest } = this.props
    const { gradientLeft, gradientRight } = theme.colors
    return (
      <Button style={{ marginTop: 60 }} disabled={disabled} {...rest}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[gradientLeft, gradientRight]}
          style={{ ...gradientStyle, opacity: disabled ? 0.6 : 1 }}
        >
          <ButtonText>{title}</ButtonText>
        </LinearGradient>
      </Button>
    )
  }
}

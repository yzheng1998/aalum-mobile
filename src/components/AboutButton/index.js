import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Wrapper, ButtonText, gradientStyle } from './styles'
import theme from '../../../theme'

const { gradientLeft, gradientRight } = theme.colors

const AccountButton = ({ text, color, disabled, gradient, borderColor }) => (
  <Wrapper borderColor={borderColor}>
    {gradient ? (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[gradientLeft, gradientRight]}
        style={{
          ...gradientStyle,
          opacity: disabled ? 0.6 : 1,
          flexDirection: 'row'
        }}
      >
        <ButtonText color={color}>{text}</ButtonText>
      </LinearGradient>
    ) : (
      <ButtonText color={color}>{text}</ButtonText>
    )}
  </Wrapper>
)

export default AccountButton

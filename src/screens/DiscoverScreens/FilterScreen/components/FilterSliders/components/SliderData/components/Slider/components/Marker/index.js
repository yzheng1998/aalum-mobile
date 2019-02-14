import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import theme from '../../../../../../../../../../../../theme'
import { Container, OuterShadow, MiddleShadow, gradientStyle } from './styles'

const Marker = () => {
  const { gradientLeft, gradientRight } = theme.colors
  return (
    <OuterShadow>
      <MiddleShadow>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[gradientLeft, gradientRight]}
          style={gradientStyle}
        >
          <Container />
        </LinearGradient>
      </MiddleShadow>
    </OuterShadow>
  )
}

export default Marker

import React from 'react'
import { EmptyBar } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import theme from '../../../theme'

const { gradientLeft, gradientRight } = theme.colors

const ProgressBar = ({ progress }) => (
  <EmptyBar>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[gradientLeft, gradientRight]}
      style={{ width: progress, height: 4 }}
    />
  </EmptyBar>
)

export default ProgressBar

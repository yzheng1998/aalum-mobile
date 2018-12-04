import React, { Component } from 'react'
import { EmptyBar } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import theme from '../../../theme'

const { gradientLeft, gradientRight } = theme.colors

export default class ProgressBar extends Component {
  render() {
    const { progress } = this.props
    return (
      <EmptyBar>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[gradientLeft, gradientRight]}
          style={{ width: progress, height: 4 }}
        />
      </EmptyBar>
    )
  }
}

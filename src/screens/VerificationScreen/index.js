import React, { Component } from 'react'
import { Screen } from './styles'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'

export default class VerificationScreen extends Component {
  render() {
    return (
      <Screen>
        <Title text="Verify your email" />
        <Subtitle text="Enter the 4 digit code we sent you to verify your account" />
      </Screen>
    )
  }
}

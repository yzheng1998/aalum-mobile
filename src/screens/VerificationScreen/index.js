import React, { Component } from 'react'
import { Screen } from './styles'
import { Title } from '../../components/Title'
import { Subtitle } from '../../components/Subtitle'
import BackButton from '../../components/BackButton'

export default class VerificationScreen extends Component {
  render() {
    return (
      <Screen>
        <BackButton />
        <Title> Verify your email </Title>
        <Subtitle>
          Enter the 4 digit code we sent you to verify your account
        </Subtitle>
      </Screen>
    )
  }
}

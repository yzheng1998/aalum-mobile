import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'

export default class VerificationScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        navigation={this.props.navigation}
        showBack
        title="Verify your email"
        subtitle="Enter the 4 digit code we sent you to verify your account"
      />
    )
  }
}

import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'

export default class VerificationScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        navigation={this.props.navigation}
        showBack
        title="Verify your email"
        subtitle="Enter the 4 digit code we sent you to verify your account"
      >
        <PrimaryButton
          title="Next"
          onPress={() => this.props.navigation.navigate('Password')}
        />
      </RegistrationScreen>
    )
  }
}

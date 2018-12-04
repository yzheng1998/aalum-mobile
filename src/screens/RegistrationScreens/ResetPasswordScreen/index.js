import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PasswordInput from '../../../components/PasswordInput'

export default class ResetPasswordScreen extends Component {
  state = {
    password: ''
  }

  render() {
    return (
      <RegistrationScreen
        title="Reset Password"
        subtitle="Your password should contain 1 letter, 1 number, and at least 8 characters."
      >
        <PasswordInput
          placeholder="New Password"
          onChangeText={password => this.setState({ password })}
        />
        <PrimaryButton
          title="Next"
          onPress={() => this.props.navigation.goBack()}
        />
      </RegistrationScreen>
    )
  }
}

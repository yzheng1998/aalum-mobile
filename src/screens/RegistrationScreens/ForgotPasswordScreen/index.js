import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PrimaryInput from '../../../components/PrimaryInput'

export default class ForgotPasswordScreen extends Component {
  state = {
    email: ''
  }

  render() {
    return (
      <RegistrationScreen
        title="Forgot Password"
        subtitle="Enter your email to receive a link to reset your password."
      >
        <PrimaryInput
          placeholder="Enter your email"
          onChangeText={email => this.setState({ email })}
        />
        <PrimaryButton
          title="Next"
          onPress={() => this.props.navigation.goBack()}
        />
      </RegistrationScreen>
    )
  }
}

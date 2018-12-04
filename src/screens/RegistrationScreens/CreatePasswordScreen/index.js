import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PasswordInput from '../../../components/PasswordInput'

export default class CreatePasswordScreen extends Component {
  state = {
    password: ''
  }

  render() {
    return (
      <RegistrationScreen
        title="Create a Password"
        subtitle="Your password should contain 1 letter, 1 number, and at least 8 characters."
      >
        <PasswordInput onChange={password => this.setState({ password })} />
        <PrimaryButton
          title="Next"
          onPress={() => this.props.navigation.navigate('IntroduceYourself')}
        />
      </RegistrationScreen>
    )
  }
}

import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PasswordInput from '../../../components/PasswordInput'

export default class CreatePasswordScreen extends Component {
  state = {
    password: ''
  }

  render() {
    const { password } = this.state
    const enabled = password
    return (
      <RegistrationScreen
        title="Create a Password"
        subtitle="Your password should contain 1 letter, 1 number, and at least 8 characters."
        progress="33%"
      >
        <PasswordInput onChange={text => this.setState({ password: text })} />
        <PrimaryButton
          title="Next"
          onPress={() => this.props.navigation.navigate('IntroduceYourself')}
          disabled={!enabled}
        />
      </RegistrationScreen>
    )
  }
}

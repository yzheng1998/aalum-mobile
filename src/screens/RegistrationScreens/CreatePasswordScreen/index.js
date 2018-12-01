import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PrimaryInput from '../../../components/PrimaryInput'

export default class CreatePasswordScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        title="Create a Password"
        subtitle="Your password should contain 1 letter, 1 number, and at least 8 characters."
      >
        <PrimaryInput placeholder="Password" />
        <PrimaryButton
          title="Next"
          onPress={() => this.props.navigation.navigate('IntroduceYourself')}
        />
      </RegistrationScreen>
    )
  }
}

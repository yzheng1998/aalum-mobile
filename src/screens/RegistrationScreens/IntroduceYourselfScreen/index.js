import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PrimaryInput from '../../../components/PrimaryInput'

export default class IntroduceYourselfScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        navigation={this.props.navigation}
        showBack
        title="Introduce Yourself"
        progress="50%"
      >
        <PrimaryInput
          title="Name"
          placeholder="Enter your first name"
          autoCapitalize="words"
        />
        <PrimaryButton
          title="Continue"
          onPress={() => this.props.navigation.navigate('Gender')}
        />
      </RegistrationScreen>
    )
  }
}

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
        title="Introuce Yourself"
      >
        <PrimaryInput title="Name" placeholder="Enter your first name" />
        <PrimaryButton
          title="Continue"
          onPress={() => this.props.navigation.navigate('Gender')}
        />
      </RegistrationScreen>
    )
  }
}
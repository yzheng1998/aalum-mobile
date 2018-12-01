import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'

export default class SeekingGenderScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Select genders to connect with?"
      >
        <PrimaryButton
          title="Continue"
          onPress={() => this.props.navigation.navigate('Photo')}
        />
      </RegistrationScreen>
    )
  }
}

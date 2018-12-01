import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'

export default class GenderScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Which gender(s) best describes you?"
      >
        <PrimaryButton
          title="Continue"
          onPress={() => this.props.navigation.navigate('Seeking')}
        />
      </RegistrationScreen>
    )
  }
}

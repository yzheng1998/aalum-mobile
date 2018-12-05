import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import GenderButtonList from '../../../components/GenderButtonList'

export default class GenderScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Which gender(s) best describes you?"
        progress="66%"
      >
        <GenderButtonList />
        <PrimaryButton
          title="Continue"
          onPress={() => this.props.navigation.navigate('Seeking')}
        />
      </RegistrationScreen>
    )
  }
}

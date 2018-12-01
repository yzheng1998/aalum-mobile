import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'

export default class EnableLocationScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        title="Enable Location"
        subtitle="AALUM uses your location to find matches near you."
      >
        <PrimaryButton
          title="Allow Location"
          onPress={() => this.props.navigation.navigate('Notifications')}
          style={{ marginTop: 29 }}
        />
      </RegistrationScreen>
    )
  }
}

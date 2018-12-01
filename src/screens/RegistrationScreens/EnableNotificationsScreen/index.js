import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'

export default class EnableNotificationsScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        title="Never miss a connection"
        subtitle="Find out when you get a match or a message by turning on notifications."
      >
        <PrimaryButton title="Allow Location" style={{ marginTop: 29 }} />
      </RegistrationScreen>
    )
  }
}

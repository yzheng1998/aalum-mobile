import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import NotificationGraphic from '../../../../assets/images/registrationFlow/NotificationGraphic.png'
import { Image, imageStyle } from './styles'

export default class EnableNotificationsScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        title="Never miss a connection"
        subtitle="Find out when you get a match or a message by turning on notifications."
        image={<Image source={NotificationGraphic} style={imageStyle} />}
      >
        <PrimaryButton title="Allow Notifications" style={{ marginTop: 29 }} />
      </RegistrationScreen>
    )
  }
}

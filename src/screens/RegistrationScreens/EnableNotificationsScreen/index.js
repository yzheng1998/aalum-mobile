import React from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import NotificationGraphic from '../../../../assets/images/registrationFlow/NotificationGraphic.png'
import * as pushNotifications from '../../../services/pushNotifications'

import { imageStyle } from './styles'

const EnableNotificationsScreen = () => (
  <RegistrationScreen
    title="Never miss a connection"
    subtitle="Find out when you get a match or a message by turning on notifications."
    source={NotificationGraphic}
    imageStyle={imageStyle}
  >
    <PrimaryButton
      onPress={() => {
        pushNotifications.configure(() =>
          this.props.navigation.navigate('Swipe')
        )
      }}
      title="Allow Notifications"
      style={{ marginTop: 29 }}
    />
  </RegistrationScreen>
)

export default EnableNotificationsScreen

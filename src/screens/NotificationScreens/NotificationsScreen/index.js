import React from 'react'
import { Screen } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'

const NotificationsScreen = ({ navigation }) => (
  <Screen>
    <ScreenHeader navigation={navigation} title="Notifications" showBack />
  </Screen>
)

export default NotificationsScreen

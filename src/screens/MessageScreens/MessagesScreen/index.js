import React from 'react'
import { Screen } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'

const MessagesScreen = ({ navigation }) => (
  <Screen>
    <ScreenHeader navigation={navigation} title="Messages" showBack />
  </Screen>
)

export default MessagesScreen

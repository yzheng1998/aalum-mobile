import React, { Component } from 'react'
import { Screen } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'
import PendingConnections from './components/PendingConnections'

export default class MessagesScreen extends Component {
  render() {
    return (
      <Screen>
        <ScreenHeader
          navigation={this.props.navigation}
          title="Messages"
          showBack
        />
        <PendingConnections />
      </Screen>
    )
  }
}

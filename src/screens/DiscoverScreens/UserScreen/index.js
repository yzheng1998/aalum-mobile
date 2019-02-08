import React, { Component } from 'react'
import { Screen } from './styles'
import UserBio from './components/UserBio'

const SAMPLE_TEXT =
  'People say I’m...out of this world--but I’m just a small-town Kansas boy looking for love.'
export default class UserScreen extends Component {
  render() {
    return (
      <Screen>
        <UserBio info={SAMPLE_TEXT} />
      </Screen>
    )
  }
}

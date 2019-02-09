import React, { Component } from 'react'
import UserDetails from './components/UserDetails'
import { Screen } from './styles'
import UserBio from './components/UserBio'

const SAMPLE_TEXT =
  'People say I’m...out of this world--but I’m just a small-town Kansas boy looking for love.'
export default class UserScreen extends Component {
  render() {
    return (
      <Screen>
        <UserDetails
          gender={['MAN']}
          ethnicity={['CAUCASIAN']}
          languages={[
            'ENGLISH',
            'SPANISH',
            'CHINESE',
            'ENGLISH',
            'SPANISH',
            'CHINESE'
          ]}
          height={`6'11"`}
          bodyType={['ATHLETIC']}
          interests={[
            'GARDENING',
            'GARDENING',
            'GARDENING',
            'GARDENING',
            'GARDENING',
            'GARDENING',
            'GARDENING'
          ]}
        />
        <UserBio info={SAMPLE_TEXT} />
      </Screen>
    )
  }
}

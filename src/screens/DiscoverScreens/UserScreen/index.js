import React, { Component } from 'react'
import UserDetails from './components/UserDetails'
import UserBio from './components/UserBio'
import MatchButton from '../../../components/MatchButton'
import { Screen, ButtonContainer } from './styles'

const SAMPLE_TEXT =
  'People say I’m...out of this world--but I’m just a small-town Kansas boy looking for love.'
export default class UserScreen extends Component {
  render() {
    return (
      <Screen>
        <UserBio info={SAMPLE_TEXT} />
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
        <ButtonContainer>
          <MatchButton name="close" />
          <MatchButton name="heart" />
        </ButtonContainer>
      </Screen>
    )
  }
}

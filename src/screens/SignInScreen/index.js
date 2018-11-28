import React, { Component } from 'react'
import { Screen } from './styles'
import PrimaryButton from '../../components/PrimaryButton'

export default class Temp extends Component {
  render() {
    return (
      <Screen>
        <PrimaryButton
          title="Sign In"
          onPress={() => {
            this.props.navigation.navigate('Verification')
          }}
        />
      </Screen>
    )
  }
}

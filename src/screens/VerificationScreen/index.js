import React, { Component } from 'react'
import { Screen } from './styles'
import Title from '../../components/Title'

export default class VerificationScreen extends Component {
  render() {
    return (
      <Screen>
        <Title text="Verify your email" />
      </Screen>
    )
  }
}

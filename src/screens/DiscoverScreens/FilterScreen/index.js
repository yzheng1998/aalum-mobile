import React, { Component } from 'react'
import { Screen } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'
import PrimaryButton from '../../../components/PrimaryButton'

export default class FilterScreen extends Component {
  render() {
    return (
      <Screen>
        <ScreenHeader
          navigation={this.props.navigation}
          title="Filter"
          showBack
        />
        <PrimaryButton title="Apply" />
      </Screen>
    )
  }
}

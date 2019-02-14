import React, { Component } from 'react'
import { Screen } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'
import PrimaryButton from '../../../components/PrimaryButton'
import FilterSliders from './components/FilterSliders'
import FilterButtonGroups from './components/FilterButtonGroups'

export default class FilterScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      distance: [40],
      age: [20, 26],
      height: [4.9, 5.8]
    }
  }

  render() {
    const { distance, age, height } = this.state
    const sliders = [
      {
        title: 'DISTANCE',
        min: 1,
        max: 100,
        step: 1,
        current: distance
      },
      {
        title: 'AGE',
        min: 18,
        max: 60,
        step: 1,
        current: age
      },
      {
        title: 'HEIGHT',
        min: 0,
        max: 9,
        step: 0.1,
        current: height
      }
    ]
    return (
      <Screen>
        <ScreenHeader
          navigation={this.props.navigation}
          title="Filter"
          showBack
        />
        <FilterSliders sliders={sliders} updateState={this.updateState} />
        <FilterButtonGroups />
        <PrimaryButton title="Apply" />
      </Screen>
    )
  }
}

import React, { Component } from 'react'
import { Screen } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'
import PrimaryButton from '../../../components/PrimaryButton'
import FilterSliders from './components/FilterSliders'
import FilterButtonGroups from './components/FilterButtonGroups'
import { inchesToString } from '../../../../constants'

export default class FilterScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      distance: [40],
      age: [20, 26],
      height: [30, 65]
    }
  }

  render() {
    const { distance, age, height } = this.state
    const sliders = [
      {
        title: 'DISTANCE',
        min: 1,
        minText: '1 mile',
        max: 100,
        maxText: '100+ miles',
        step: 1,
        current: distance,
        suffix: 'mile',
        formatter: x => x,
        updateState: val => this.updateState({ distance: val })
      },
      {
        title: 'AGE',
        min: 18,
        minText: '18',
        max: 60,
        maxText: '60+',
        step: 1,
        current: age,
        suffix: '',
        formatter: x => x,
        updateState: val => this.updateState({ age: val })
      },
      {
        title: 'HEIGHT',
        min: 0,
        max: 108,
        step: 1,
        current: height,
        suffix: '',
        formatter: inchesToString,
        updateState: val => this.updateState({ height: val })
      }
    ]
    return (
      <Screen>
        <ScreenHeader
          navigation={this.props.navigation}
          title="Filter"
          showBack
        />
        <FilterSliders sliders={sliders} />
        <FilterButtonGroups />
        <PrimaryButton title="Apply" />
      </Screen>
    )
  }
}

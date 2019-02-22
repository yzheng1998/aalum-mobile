import React, { Component } from 'react'
import { Screen, Container, Padding } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'
import FilterSliders from './components/FilterSliders'
import FloatingButton from '../../../components/FloatingButton'
import FilterButtonGroups from './components/FilterButtonGroups'
import { inchesToString } from './unitConverters'
import {
  distanceSliderInfo,
  ageSliderInfo,
  heightSliderInfo
} from './constants'

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
        ...distanceSliderInfo,
        values: distance,
        formatter: x => x,
        updateState: val => this.updateState({ distance: val })
      },
      {
        ...ageSliderInfo,
        values: age,
        formatter: x => x,
        updateState: val => this.updateState({ age: val })
      },
      {
        ...heightSliderInfo,
        values: height,
        formatter: inchesToString,
        updateState: val => this.updateState({ height: val })
      }
    ]
    return (
      <Container>
        <Screen>
          <ScreenHeader
            navigation={this.props.navigation}
            title="Filter"
            showBack
          />
          <FilterSliders sliders={sliders} />
          <FilterButtonGroups />
          <Padding />
        </Screen>
        <FloatingButton title="Apply" />
      </Container>
    )
  }
}

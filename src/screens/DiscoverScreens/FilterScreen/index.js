import React, { Component } from 'react'
import { Screen, Container, Padding } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'
import FilterSliders from './components/FilterSliders'
import FloatingButton from '../../../components/FloatingButton'
import FilterButtonGroups from './components/FilterButtonGroups'
import { inchesToString } from '../../../../unitConverters'
import FilterMultiLists from './components/FilterMultiLists'

import {
  distanceSliderInfo,
  ageSliderInfo,
  heightSliderInfo,
  languageListInfo,
  professionListInfo
} from './constants'

export default class FilterScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      distance: [40],
      age: [20, 26],
      height: [30, 65],
      languages: [],
      professions: []
    }
  }

  render() {
    const { distance, age, height, languages, professions } = this.state
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

    const lists = [
      {
        ...languageListInfo,
        onChange: val => this.updateState({ languages: val }),
        selectedItems: languages
      },
      {
        ...professionListInfo,
        onChange: val => this.updateState({ professions: val }),
        selectedItems: professions
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
          <FilterMultiLists lists={lists} />
          <Padding />
        </Screen>
        <FloatingButton title="Apply" />
      </Container>
    )
  }
}

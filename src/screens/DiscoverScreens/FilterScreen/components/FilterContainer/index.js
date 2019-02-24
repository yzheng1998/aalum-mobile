import React, { Component } from 'react'
import { Container, Padding } from './styles'
import FilterSliders from '../FilterSliders'
import FilterButtonGroups from '../FilterButtonGroups'
import FloatingButton from '../../../../../components/FloatingButton'
import FilterMultiLists from '../FilterMultiLists'
import { inchesToString } from '../../../../../../unitConverters'
import {
  distanceSliderInfo,
  ageSliderInfo,
  heightSliderInfo,
  languageListInfo,
  professionListInfo
} from '../../constants'

export default class FilterContainer extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      distance: props.distance,
      age: props.age,
      height: props.height,
      languages: props.languages,
      professions: props.professions
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
        <FilterSliders sliders={sliders} />
        <FilterButtonGroups />
        <FilterMultiLists lists={lists} />
        <Padding />
        <FloatingButton title="Apply" />
      </Container>
    )
  }
}

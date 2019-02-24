import React, { Component } from 'react'
import { Container, Padding } from './styles'
import FilterSliders from '../FilterSliders'
import FilterButtonGroups from '../FilterButtonGroups'
import FloatingButton from '../../../../../components/FloatingButton'
import { inchesToString } from '../../../../../../unitConverters'
import {
  distanceSliderInfo,
  ageSliderInfo,
  heightSliderInfo
} from '../../constants'

export default class FilterContainer extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      distance: props.distance,
      age: props.age,
      height: props.height
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
        <FilterSliders sliders={sliders} />
        <FilterButtonGroups />
        <Padding />
        <FloatingButton title="Apply" />
      </Container>
    )
  }
}

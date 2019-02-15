import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Marker from './components/Marker'
import { Container, trackStyle, selectedStyle } from './styles'

class Slider extends Component {
  render() {
    const { width } = Dimensions.get('window')
    const { min, max, step, current, updateState } = this.props
    return (
      <Container>
        <MultiSlider
          min={min}
          max={max}
          step={step}
          values={current}
          sliderLength={width - 40}
          trackStyle={trackStyle}
          selectedStyle={selectedStyle}
          customMarker={Marker}
          enabledOne
          enabledTwo
          onValuesChange={val => updateState(val)}
        />
      </Container>
    )
  }
}

export default Slider

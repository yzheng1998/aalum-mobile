import React from 'react'
import { Dimensions } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Marker from './components/Marker'
import { Container, trackStyle, selectedStyle } from './styles'

const Slider = ({ min, max, step, values, updateState }) => {
  const { width } = Dimensions.get('window')
  return (
    <Container>
      <MultiSlider
        min={min}
        max={max}
        step={step}
        values={values}
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

export default Slider

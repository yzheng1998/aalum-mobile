import React, { Component } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Container } from './styles'

class Slider extends Component {
  render() {
    return (
      <Container>
        <MultiSlider
          min={1}
          max={100}
          step={1}
          values={[50]}
          sliderLength={300}
          valuePrefix="mile"
          valueSuffix="mile"
        />
      </Container>
    )
  }
}

export default Slider

import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Marker from './components/Marker'
import { Container, trackStyle, selectedStyle } from './styles'

class Slider extends Component {
  render() {
    const { width } = Dimensions.get('window')
    const { title, min, max, step, current, updateState } = this.props
    return (
      <Container>
        <MultiSlider
          min={min}
          max={max}
          step={step}
          values={current}
          sliderLength={width - 40}
          valuePrefix="mile"
          trackStyle={trackStyle}
          selectedStyle={selectedStyle}
          valueSuffix="mile"
          customMarker={Marker}
          enabledOne
          enabledTwo
          onValuesChange={val => {
            switch (title) {
              case 'DISTANCE':
                updateState({ distance: val })
                break
              case 'AGE':
                updateState({ age: val })
                break
              case 'HEIGHT':
                updateState({ height: val })
                break
              default:
            }
          }}
        />
      </Container>
    )
  }
}

export default Slider

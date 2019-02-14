import React, { Component } from 'react'
import SliderData from './components/SliderData'
import { Container } from './styles'

class FilterSliders extends Component {
  render() {
    const { sliders, updateState } = this.props
    return (
      <Container>
        {sliders.map(slider => (
          <SliderData
            key={slider.title}
            title={slider.title}
            min={slider.min}
            max={slider.max}
            step={slider.step}
            current={slider.current}
            updateState={updateState}
          />
        ))}
      </Container>
    )
  }
}

export default FilterSliders

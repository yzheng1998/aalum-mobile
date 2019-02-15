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
            minText={slider.minText}
            max={slider.max}
            maxText={slider.maxText}
            step={slider.step}
            current={slider.current}
            suffix={slider.suffix}
            formatter={slider.formatter}
            updateState={updateState}
          />
        ))}
      </Container>
    )
  }
}

export default FilterSliders

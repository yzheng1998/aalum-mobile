import React, { Component } from 'react'
import Slider from './components/Slider'
import {
  Container,
  RowContainer,
  Title,
  CurrentValueText,
  BoundaryText
} from './styles'

class SliderData extends Component {
  render() {
    const {
      title,
      min,
      max,
      minText,
      maxText,
      current,
      step,
      suffix,
      formatter,
      updateState
    } = this.props
    return (
      <Container>
        <RowContainer>
          <Title>{title}</Title>
          <CurrentValueText>
            {current[1]
              ? `${formatter(current[0])} - ${formatter(current[1])} ${suffix}`
              : `${formatter(current[0])} ${
                  current[0] === 1 ? suffix : `${suffix}s`
                }`}
          </CurrentValueText>
        </RowContainer>
        <Slider
          title={title}
          min={min}
          max={max}
          current={current}
          step={step}
          updateState={updateState}
          formatter={formatter}
        />
        <RowContainer>
          <BoundaryText>{minText}</BoundaryText>
          <BoundaryText>{maxText}</BoundaryText>
        </RowContainer>
      </Container>
    )
  }
}

export default SliderData

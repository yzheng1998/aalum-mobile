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
      values,
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
            {values[1]
              ? `${formatter(values[0])} - ${formatter(values[1])} ${suffix}`
              : `${formatter(values[0])} ${
                  values[0] === 1 ? suffix : `${suffix}s`
                }`}
          </CurrentValueText>
        </RowContainer>
        <Slider
          min={min}
          max={max}
          values={values}
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

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
    const { title, min, max, current, step, updateState } = this.props
    return (
      <Container>
        <RowContainer>
          <Title>{title}</Title>
          <CurrentValueText>
            {current[1] ? `${current[0]} - ${current[1]}` : current[0]}
          </CurrentValueText>
        </RowContainer>
        <Slider
          title={title}
          min={min}
          max={max}
          current={current}
          step={step}
          updateState={updateState}
        />
        <RowContainer>
          <BoundaryText>{min}</BoundaryText>
          <BoundaryText>{max}</BoundaryText>
        </RowContainer>
      </Container>
    )
  }
}

export default SliderData

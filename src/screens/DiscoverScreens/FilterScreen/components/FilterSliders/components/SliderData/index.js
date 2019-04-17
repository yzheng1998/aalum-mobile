import React from 'react'
import Slider from './components/Slider'
import Heading from '../../../../../../../components/Heading'
import {
  Container,
  RowContainer,
  CurrentValueText,
  BoundaryText
} from './styles'

const SliderData = ({
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
}) => (
  <Container>
    <RowContainer>
      <Heading>{title}</Heading>
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

export default SliderData

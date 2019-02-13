import React, { Component } from 'react'
import { ButtonGroupContainer, Container, Title } from './styles'
import ToggleButton from '../ToggleButton'
import _ from 'lodash'
import { stringToEnum } from '../../../enumMappings'

export default class ToggleButtonGroup extends Component {
  onPress = (updateState, array, val) => {
    const enumVal = stringToEnum(val)
    if (!_.includes(array, enumVal)) {
      updateState([...array, enumVal])
    } else {
      updateState(array.filter(item => item !== enumVal))
    }
  }

  render() {
    const {
      title,
      selectionArray,
      optionsArray,
      updateState,
      allSelected,
      disabled,
      isFilter
    } = this.props
    return (
      <Container>
        {title && <Title>{title}</Title>}
        <ButtonGroupContainer isFilter={isFilter}>
          {optionsArray.map(option => {
            const isSelected = selectionArray.includes(stringToEnum(option))
            return (
              <ToggleButton
                key={option}
                title={option}
                isSelected={allSelected || isSelected}
                onPress={selection =>
                  this.onPress(updateState, selectionArray, selection)
                }
                disabled={disabled && !isSelected}
              />
            )
          })}
        </ButtonGroupContainer>
      </Container>
    )
  }
}

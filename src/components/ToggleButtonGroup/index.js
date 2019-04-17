import React, { Component } from 'react'
import { ButtonGroupContainer, Container } from './styles'
import ToggleButton from '../ToggleButton'
import Heading from '../Heading'
import _ from 'lodash'
import { stringToEnum } from '../../../enumMappings'

export default class ToggleButtonGroup extends Component {
  /* updates the selectionArray in state to add value if it doesn't exist
  and to remove value if it already exists */
  addOrRemoveValue = (updateState, array, val) => {
    const enumVal = stringToEnum(val)
    if (!_.includes(array, enumVal)) {
      updateState([...array, enumVal])
    } else {
      updateState(array.filter(item => item !== enumVal))
    }
  }

  // takes an array of selected enums called selectionArray
  // takes an array of string options called optionsArray
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
        {title && <Heading>{title}</Heading>}
        <ButtonGroupContainer isFilter={isFilter}>
          {optionsArray.map(option => {
            const isSelected = selectionArray.includes(stringToEnum(option))
            return (
              <ToggleButton
                key={option}
                title={option}
                isSelected={allSelected || isSelected}
                addOrRemoveValue={selection =>
                  this.addOrRemoveValue(updateState, selectionArray, selection)
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

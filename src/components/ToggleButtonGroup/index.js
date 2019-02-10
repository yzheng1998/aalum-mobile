import React, { Component } from 'react'
import { ButtonContainer } from './styles'
import ToggleButton from '../ToggleButton'

export default class ToggleButtonGroup extends Component {
  render() {
    const { buttonSelection, select, allSelected, disabled } = this.props
    return (
      <ButtonContainer>
        {buttonSelection.map((button, index) => (
          <ToggleButton
            key={button.title}
            title={button.title}
            select={() => select(index)}
            isSelected={allSelected || button.selected}
            disabled={disabled && !button.selected}
          />
        ))}
      </ButtonContainer>
    )
  }
}

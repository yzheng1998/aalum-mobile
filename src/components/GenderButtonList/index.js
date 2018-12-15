import React, { Component } from 'react'
import { ButtonContainer } from './styles'
import GenderButton from '../GenderButton'

export default class GenderButtonList extends Component {
  render() {
    const { genderSelection, selectGender, allSelected, disabled } = this.props
    return (
      <ButtonContainer>
        {genderSelection.map((gender, index) => (
          <GenderButton
            key={gender.title}
            title={gender.title}
            selectGender={() => selectGender(index)}
            selected={allSelected || gender.selected}
            disabled={disabled && !gender.selected}
          />
        ))}
      </ButtonContainer>
    )
  }
}

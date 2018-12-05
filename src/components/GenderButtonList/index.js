import React, { Component } from 'react'
import { Genders } from '../../../constants'
import { ButtonContainer } from './styles'
import GenderButton from '../GenderButton'

export default class GenderButtonList extends Component {
  state = {
    selectedGenders: [],
    genders: Genders
  }

  selectGender = (gender, index) => {
    let { selectedGenders, genders } = this.state
    genders[index].selected = !genders[index].selected
    selectedGenders = selectedGenders.filter(g => g.title !== gender.title)
    this.setState({
      genders,
      selectedGenders
    })
  }

  render() {
    const { genders } = this.state
    return (
      <ButtonContainer>
        {genders.map((gender, index) => (
          <GenderButton
            key={gender.title}
            title={gender.title}
            selectGender={() => this.selectGender(gender, index)}
            selected={gender.selected}
          />
        ))}
      </ButtonContainer>
    )
  }
}

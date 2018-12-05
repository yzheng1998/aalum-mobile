import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import GenderButtonList from '../../../components/GenderButtonList'
import { GenderList } from '../../../../constants'

const initialGenderSelection = GenderList.map(title => ({
  title,
  selected: false
}))

export default class GenderScreen extends Component {
  state = {
    genderSelection: initialGenderSelection
  }

  selectGender = index => {
    const { genderSelection } = this.state
    genderSelection[index].selected = !genderSelection[index].selected
    this.setState({
      genderSelection
    })
  }

  render() {
    const finalGenders = this.state.genderSelection
      .filter(gender => gender.selected)
      .map(gender => gender.title)

    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Which gender(s) best describes you?"
        progress="66%"
      >
        <GenderButtonList
          genderSelection={this.state.genderSelection}
          selectGender={this.selectGender}
        />
        <PrimaryButton
          title="Continue"
          onPress={() =>
            this.props.navigation.navigate('Seeking', { genders: finalGenders })
          }
        />
      </RegistrationScreen>
    )
  }
}

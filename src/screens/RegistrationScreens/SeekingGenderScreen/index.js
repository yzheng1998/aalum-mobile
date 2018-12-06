import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import GenderButtonList from '../../../components/GenderButtonList'
import { GenderList } from '../../../../constants'

const initialGenderSelection = GenderList.map(title => ({
  title,
  selected: false
}))

export default class SeekingGenderScreen extends Component {
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
    const enabled =
      this.state.genderSelection.filter(gender => gender.selected).length > 0
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Select genders to connect with"
        progress="80%"
      >
        <GenderButtonList
          genderSelection={this.state.genderSelection}
          selectGender={this.selectGender}
        />
        <PrimaryButton
          title="Continue"
          onPress={() =>
            this.props.navigation.navigate('Photo', { seeking: finalGenders })
          }
          disabled={!enabled}
        />
      </RegistrationScreen>
    )
  }
}

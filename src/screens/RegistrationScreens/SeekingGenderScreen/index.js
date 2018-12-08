import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import GenderButtonList from '../../../components/GenderButtonList'
import { GenderList } from '../../../../constants'
import { ToggleContainer, Toggle, ToggleText } from './styles'
import theme from '../../../../theme'

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
    const { genderSelection } = this.state
    const finalGenders = genderSelection
      .filter(gender => gender.selected)
      .map(gender => gender.title)
    const numberSelected = this.state.genderSelection.filter(
      gender => gender.selected
    ).length
    const enabled = numberSelected > 0

    const allSelected = numberSelected === genderSelection.length
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Select genders to connect with"
        progress="80%"
      >
        <GenderButtonList
          genderSelection={genderSelection}
          selectGender={this.selectGender}
          allSelected={allSelected}
        />
        <ToggleContainer>
          <Toggle
            trackColor={{
              false: theme.colors.grey,
              true: theme.colors.gradientRight
            }}
            ios_backgroundColor={theme.colors.grey}
            value={allSelected}
            onValueChange={isOn =>
              this.setState(prevState => ({
                genderSelection: prevState.genderSelection.map(gender => ({
                  title: gender.title,
                  selected: isOn
                }))
              }))
            }
          />
          <ToggleText>I&apos;m open to everyone</ToggleText>
        </ToggleContainer>
        <PrimaryButton
          style={{ marginTop: 22 }}
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

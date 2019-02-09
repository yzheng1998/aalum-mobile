import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import GenderButtonList from '../../../components/GenderButtonList'
import { GenderList, stringToEnum } from '../../../../enumMappings'
import { ToggleContainer, Toggle, ToggleText } from './styles'
import theme from '../../../../theme'

const mapDispatchToProps = dispatch => ({
  addGenders: genders => dispatch(addInfo(genders))
})

const initialGenderSelection = GenderList.map(title => ({
  title,
  selected: false
}))

class SeekingGenderScreen extends Component {
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
    const filteredGenders = this.state.genderSelection.filter(
      gender => gender.selected
    )
    const numberSelected = filteredGenders.length
    const enabled = numberSelected > 0
    const finalGenders = filteredGenders.map(gender => gender.title)
    const genderEnums = finalGenders.map(gender =>
      stringToEnum('gender', gender)
    )
    const allSelected = numberSelected === genderSelection.length
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Select genders to connect with"
        progress="80%"
        scrollEnabled
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
          onPress={() => {
            this.props.addGenders({ key: 'connectsWith', value: genderEnums })
            this.props.navigation.navigate('Photo', { seeking: finalGenders })
          }}
          disabled={!enabled}
        />
      </RegistrationScreen>
    )
  }
}

const SeekingGender = connect(
  null,
  mapDispatchToProps
)(SeekingGenderScreen)
export default SeekingGender

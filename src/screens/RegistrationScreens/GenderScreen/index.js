import React, { Component } from 'react'
import { Message } from './styles'
import { connect } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import GenderButtonList from '../../../components/GenderButtonList'
import { GenderList, stringToEnum } from '../../../../enumMappings'

const mapDispatchToProps = dispatch => ({
  addGenders: genders => dispatch(addInfo(genders))
})

const initialGenderSelection = GenderList.map(title => ({
  title,
  selected: false
}))

class GenderScreen extends Component {
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
    const filteredGenders = this.state.genderSelection.filter(
      gender => gender.selected
    )
    const numberSelected = filteredGenders.length
    const enabled = numberSelected > 0
    const disabled = numberSelected >= 5
    const finalGenders = filteredGenders.map(gender => gender.title)
    const genderEnums = finalGenders.map(gender =>
      stringToEnum('gender', gender)
    )
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Which gender(s) best describes you?"
        progress="66%"
        scrollEnabled
      >
        <GenderButtonList
          genderSelection={this.state.genderSelection}
          selectGender={this.selectGender}
          disabled={disabled}
        />
        <Message disabled={disabled}>Select a maximum of 5 genders</Message>
        <PrimaryButton
          title="Continue"
          style={{ marginTop: 40 }}
          onPress={() => {
            this.props.addGenders({ key: 'genders', value: genderEnums })
            this.props.navigation.navigate('Seeking', { genders: finalGenders })
          }}
          disabled={!enabled}
        />
      </RegistrationScreen>
    )
  }
}

const Gender = connect(
  null,
  mapDispatchToProps
)(GenderScreen)
export default Gender

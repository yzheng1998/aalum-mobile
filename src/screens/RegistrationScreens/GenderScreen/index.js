import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import GenderButtonList from '../../../components/GenderButtonList'
import { GenderList, GenderEnumsObj } from '../../../../constants'

const mapDispatchToProps = dispatch => {
  return {
    addGenders: genders => dispatch(addInfo(genders))
  }
}

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
    const finalGenders = filteredGenders.map(gender => gender.title)
    const genderEnums = finalGenders.map(gender => GenderEnumsObj[gender])
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
          disabled={numberSelected >= 5}
        />
        <PrimaryButton
          title="Continue"
          onPress={() => {
            this.props.addGenders({ key: 'gender', value: genderEnums })
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

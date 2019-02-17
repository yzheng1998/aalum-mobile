import React, { Component } from 'react'
import { Message } from './styles'
import { connect } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import ToggleButtonGroup from '../../../components/ToggleButtonGroup'
import { genderList } from '../../../../enumMappings'

const mapDispatchToProps = dispatch => ({
  addGenders: genders => dispatch(addInfo(genders))
})

const mapStateToProps = state => ({
  genders: state.genders
})

class GenderScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      genderSelection: this.props.genders || []
    }
  }

  render() {
    const { genderSelection } = this.state
    const enabled = genderSelection.length > 0
    const disabled = genderSelection.length >= 5
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Which gender(s) best describes you?"
        progress="66%"
        scrollEnabled
      >
        <ToggleButtonGroup
          optionsArray={genderList}
          selectionArray={genderSelection}
          updateState={selection =>
            this.updateState({ genderSelection: selection })
          }
          disabled={disabled}
        />
        <Message disabled={disabled}>Select a maximum of 5 genders</Message>
        <PrimaryButton
          title="Continue"
          style={{ marginTop: 40 }}
          onPress={() => {
            this.props.addGenders({ key: 'genders', value: genderSelection })
            this.props.navigation.navigate('Seeking')
          }}
          disabled={!enabled}
        />
      </RegistrationScreen>
    )
  }
}

const Gender = connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderScreen)
export default Gender

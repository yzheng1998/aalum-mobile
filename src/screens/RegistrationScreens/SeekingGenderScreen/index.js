import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import RegistrationScreen from '../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import ToggleButtonGroup from '../../../components/ToggleButtonGroup'
import { genderEnumList, genderList } from '../../../../enumMappings'
import { ToggleContainer, Toggle, ToggleText } from './styles'
import theme from '../../../../theme'

const mapDispatchToProps = dispatch => ({
  addGenders: genders => dispatch(addInfo(genders))
})

const mapStateToProps = state => ({
  connectsWith: state.connectsWith
})

class SeekingGenderScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      connectsWithSelection: this.props.connectsWith || []
    }
  }

  render() {
    const { connectsWithSelection } = this.state
    const enabled = connectsWithSelection.length > 0
    const allSelected = connectsWithSelection.length === genderEnumList.length
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Select genders to connect with"
        progress="80%"
        scrollEnabled
      >
        <ToggleButtonGroup
          optionsArray={genderList}
          selectionArray={connectsWithSelection}
          updateState={selection =>
            this.updateState({ connectsWithSelection: selection })
          }
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
              this.setState({
                connectsWithSelection: isOn ? genderEnumList : []
              })
            }
          />
          <ToggleText>I&apos;m open to everyone</ToggleText>
        </ToggleContainer>
        <PrimaryButton
          style={{ marginTop: 22 }}
          title="Continue"
          onPress={() => {
            this.props.addGenders({
              key: 'connectsWith',
              value: connectsWithSelection
            })
            this.props.navigation.navigate('Photo')
          }}
          disabled={!enabled}
        />
      </RegistrationScreen>
    )
  }
}

const SeekingGender = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeekingGenderScreen)
export default SeekingGender

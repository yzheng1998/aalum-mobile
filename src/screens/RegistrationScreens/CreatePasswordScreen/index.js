import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PasswordInput from '../../../components/PasswordInput'

const mapDispatchToProps = dispatch => {
  return { addPassword: password => dispatch(addInfo(password)) }
}

class CreatePasswordScreen extends Component {
  state = {
    password: ''
  }

  render() {
    const { password } = this.state
    const enabled = password
    return (
      <RegistrationScreen
        title="Create a Password"
        subtitle="Your password should contain 1 letter, 1 number, and at least 8 characters."
        progress="33%"
      >
        <PasswordInput onChangeText={password => this.setState({ password })} />
        <PrimaryButton
          title="Next"
          onPress={() => {
            this.props.addPassword({ key: 'password', value: password })
            this.props.navigation.navigate('IntroduceYourself')
          }}
          disabled={!enabled}
        />
      </RegistrationScreen>
    )
  }
}

const CreatePassword = connect(
  null,
  mapDispatchToProps
)(CreatePasswordScreen)
export default CreatePassword

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PasswordInput from '../../../components/PasswordInput'
import constraints from './constraints'

const validate = require('validate.js')

const mapDispatchToProps = dispatch => ({
  addPassword: password => dispatch(addInfo(password))
})

class CreatePasswordScreen extends Component {
  state = {
    password: '',
    displayErrors: {},
    errors: {},
    touched: {}
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        password: this.state.password
      },
      constraints
    )

    const constructDisplayErrors = () => {
      const displayErrors = {}
      Object.keys(errors || {}).forEach(key => {
        if (this.state.touched[key]) {
          displayErrors[key] = errors[key]
        }
      })
      return displayErrors
    }

    const errorsReduced =
      Object.keys(errors || {}).length <
      Object.keys(this.state.errors || {}).length

    if (!isOnChangeText || (isOnChangeText && errorsReduced)) {
      this.setState({ displayErrors: constructDisplayErrors() })
    }
    this.setState({ errors })
  }

  addTouched = key => {
    const touched = {
      ...this.state.touched,
      [key]: true
    }
    this.setState({ touched })
  }

  render() {
    const { password, errors, displayErrors } = this.state
    const enabled = !errors
    return (
      <RegistrationScreen
        title="Create a Password"
        subtitle="Your password should contain 1 letter, 1 number, and at least 8 characters."
        progress="33%"
      >
        <PasswordInput
          error={displayErrors.password}
          onChangeText={value =>
            this.setState({ password: value }, () => this.validateForm(true))
          }
          onFocus={() => this.addTouched('password')}
          onBlur={() => this.validateForm(false)}
          autoFocus
          returnKeyType="done"
          onSubmitEditing={() => {
            this.button.onPress()
          }}
        />
        <PrimaryButton
          ref={button => {
            this.button = button
          }}
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

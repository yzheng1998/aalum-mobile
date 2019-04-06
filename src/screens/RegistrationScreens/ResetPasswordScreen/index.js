import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { Alert, AsyncStorage } from 'react-native'

import { RESET_PASSWORD } from './graphql'
import RegistrationScreen from '../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PasswordInput from '../../../components/PasswordInput'
import constraints from './constraints'

const validate = require('validate.js')

export default class ResetPasswordScreen extends Component {
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

  onCompleted = ({ resetPassword: { success, error } }) => {
    if (error) return Alert.alert('Could not reset password', error.message)
    if (!success)
      return Alert.alert('Could not reset password', 'Please try again later')
    Alert.alert('Success!', 'Password reset successfully!')
    AsyncStorage.setItem('token', '')
    this.props.navigation.navigate('SignIn')
    return success
  }

  render() {
    const { password, errors, displayErrors } = this.state
    const enabled = !errors
    return (
      <RegistrationScreen
        title="Reset Password"
        subtitle="Your password should contain 1 letter, 1 number, and at least 8 characters."
      >
        <PasswordInput
          error={displayErrors.password}
          placeholder="New Password"
          onChangeText={input =>
            this.setState({ password: input }, () => this.validateForm(true))
          }
          onFocus={() => this.addTouched('password')}
          onBlur={() => this.validateForm(false)}
          autoFocus
          onSubmitEditing={() => {
            if (enabled) this.button.onPress()
          }}
          returnKeyType="done"
        />
        <Mutation
          mutation={RESET_PASSWORD}
          variables={{ resetPasswordInput: { newPassword: password } }}
          onCompleted={this.onCompleted}
          onError={error => Alert.alert(error.message)}
        >
          {resetPassword => (
            <PrimaryButton
              ref={button => {
                this.button = button
              }}
              title="Next"
              onPress={() => resetPassword()}
              disabled={!enabled}
            />
          )}
        </Mutation>
      </RegistrationScreen>
    )
  }
}

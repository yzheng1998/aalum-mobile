import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { Alert, AsyncStorage } from 'react-native'

import { RESET_PASSWORD } from './graphql'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PasswordInput from '../../../components/PasswordInput'

export default class ResetPasswordScreen extends Component {
  state = {
    password: ''
  }

  render() {
    const { password } = this.state
    return (
      <RegistrationScreen
        title="Reset Password"
        subtitle="Your password should contain 1 letter, 1 number, and at least 8 characters."
      >
        <PasswordInput
          placeholder="New Password"
          onChangeText={input => this.setState({ password: input })}
        />
        <Mutation
          mutation={RESET_PASSWORD}
          variables={{ resetPasswordInput: { newPassword: password } }}
          onCompleted={({ resetPassword: { success, error } }) => {
            if (error)
              return Alert.alert('Could not reset password', error.message)
            if (!success)
              return Alert.alert(
                'Could not reset password',
                'Please try again later'
              )
            Alert.alert('Success!', 'Password reset successfully!')
            AsyncStorage.setItem('token', '')
            this.props.navigation.navigate('SignIn')
            return success
          }}
          onError={error => Alert.alert(error.message)}
        >
          {resetPassword => (
            <PrimaryButton title="Next" onPress={() => resetPassword()} />
          )}
        </Mutation>
      </RegistrationScreen>
    )
  }
}

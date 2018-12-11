import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { Alert, AsyncStorage } from 'react-native'

import { FORGOT_PASSWORD } from './graphql'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PrimaryInput from '../../../components/PrimaryInput'

export default class ForgotPasswordScreen extends Component {
  state = {
    email: ''
  }

  onCompleted = ({ forgotPassword: { token, code, error } }) => {
    if (error) return Alert.alert('Could not verify email', error.message)
    AsyncStorage.setItem('token', token)
    this.props.navigation.navigate('ForgotPasswordVerify', {
      code: code.toString()
    })
    return true
  }

  render() {
    const { email } = this.state
    const enabled = email
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Forgot Password"
        subtitle="Enter your email to receive a code to reset your password."
      >
        <PrimaryInput
          placeholder="Enter your email"
          onChangeText={input => this.setState({ email: input })}
        />
        <Mutation
          mutation={FORGOT_PASSWORD}
          variables={{ email }}
          onCompleted={this.onCompleted}
          onError={error =>
            Alert.alert('Could not verify email', error.message)
          }
        >
          {forgotPassword => (
            <PrimaryButton
              title="Next"
              onPress={() => forgotPassword()}
              disabled={!enabled}
            />
          )}
        </Mutation>
      </RegistrationScreen>
    )
  }
}

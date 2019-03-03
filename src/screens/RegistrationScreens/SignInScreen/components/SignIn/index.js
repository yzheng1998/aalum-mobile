import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { AsyncStorage, Alert } from 'react-native'
import { LOGIN_USER } from './graphql'
import PrimaryButton from '../../../../../components/PrimaryButton'
import RegistrationScreen from '../../../../../components/RegistrationScreen'
import PrimaryInput from '../../../../../components/PrimaryInput'
import Icon from '../../../../../components/Icon'
import TextButton from '../../../../../components/TextButton'
import { setPosition } from '../../../../../../AppUtilities/geolocation'

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  }

  loginUser = async ({ loginUser: { user, token, error } }) => {
    if (error) {
      Alert.alert('Could not sign in', error.message)
    }
    await AsyncStorage.setItem('userId', user.id)
    await AsyncStorage.setItem('token', token)
    setPosition(() => this.props.navigation.navigate('Swipe'))
  }

  render() {
    const { passwordError, emailError, email, password } = this.state
    const enabled = email && password
    return (
      <RegistrationScreen style={{ marginTop: 66 }}>
        <PrimaryInput
          autoFocus
          error={emailError}
          placeholder="Email"
          icon={<Icon name="person" size={20} color="rgb(181, 171, 202)" />}
          autoCapitalize="none"
          onChangeText={text => this.setState({ email: text })}
          returnKeyType="next"
          onSubmitEditing={() => {
            this.password.focus()
          }}
          keyboardType="email-address"
        />
        <PrimaryInput
          ref={input => {
            this.password = input
          }}
          secureTextEntry
          error={passwordError}
          placeholder="Password"
          icon={<Icon name="lock" size={20} color="rgb(181, 171, 202)" />}
          autoCapitalize="none"
          returnKeyType="done"
          onChangeText={text => this.setState({ password: text })}
          onSubmitEditing={() => {
            this.signInButton.onPress()
          }}
        />
        <TextButton
          onPress={() => this.props.navigation.navigate('ForgotPassword')}
          text="Forgot Password?"
        />
        <Mutation
          mutation={LOGIN_USER}
          variables={{ email, password }}
          onCompleted={this.loginUser}
          onError={error => Alert.alert('Could not sign in', error.message)}
        >
          {loginUser => (
            <PrimaryButton
              ref={button => {
                this.signInButton = button
              }}
              title="Sign In"
              style={{ marginTop: 15 }}
              disabled={!enabled}
              onPress={() => loginUser()}
            />
          )}
        </Mutation>
      </RegistrationScreen>
    )
  }
}

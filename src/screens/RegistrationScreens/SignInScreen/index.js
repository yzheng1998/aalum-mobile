import React, { Component } from 'react'
import PrimaryButton from '../../../components/PrimaryButton'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryInput from '../../../components/PrimaryInput'
import TextButton from '../../../components/TextButton'
import Icon from 'react-native-vector-icons/Ionicons'
import Lock from 'react-native-vector-icons/Foundation'

export default class SignUpScreen extends Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  }
  render() {
    const { passwordError, emailError } = this.state
    return (
      <RegistrationScreen>
        <PrimaryInput
          error={emailError}
          placeholder="Email"
          icon={<Icon name="md-person" size={20} color="rgb(181, 171, 202)" />}
          autoCapitalize="none"
          onChangeText={text => this.setState({ email: text })}
        />
        <PrimaryInput
          secureTextEntry
          error={passwordError}
          placeholder="Password"
          icon={<Lock name="lock" size={20} color="rgb(181, 171, 202)" />}
          autoCapitalize="none"
          onChangeText={text => this.setState({ password: text })}
        />
        <TextButton text="Forgot Password?" />
        <PrimaryButton
          title="Sign In"
          onPress={() => {
            this.props.navigation.navigate('Verification')
          }}
          style={{ marginTop: 15 }}
        />
      </RegistrationScreen>
    )
  }
}

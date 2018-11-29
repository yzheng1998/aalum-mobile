import React, { Component } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import { Screen, TextInputContainer } from './styles'
import PrimaryInput from '../../components/PrimaryInput'
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
    const { passwordError, emailError, email, password } = this.state
    return (
      <Screen>
        <TextInputContainer>
          <PrimaryInput
            error={emailError}
            placeholder={email || 'Email'}
            icon={
              <Icon name="md-person" size={20} color="rgb(181, 171, 202)" />
            }
            autoCapitalize="none"
          />
        </TextInputContainer>
        <TextInputContainer>
          <PrimaryInput
            secureTextEntry
            error={passwordError}
            placeholder={password || 'Password'}
            icon={<Lock name="lock" size={20} color="rgb(181, 171, 202)" />}
            autoCapitalize="none"
          />
        </TextInputContainer>
        <PrimaryButton
          title="Sign In"
          onPress={() => {
            this.props.navigation.navigate('Verification')
          }}
        />
      </Screen>
    )
  }
}

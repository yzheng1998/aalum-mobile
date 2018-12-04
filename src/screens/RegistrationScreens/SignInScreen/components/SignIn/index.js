import React, { Component } from 'react'
import PrimaryButton from '../../../../../components/PrimaryButton'
import RegistrationScreen from '../../../../../components/RegistrationScreen'
import PrimaryInput from '../../../../../components/PrimaryInput'
import Icon from '../../../../../components/Icon'
import { Wrapper, BottomText } from './styles'

export default class SignIn extends Component {
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
        <Wrapper>
          <PrimaryInput
            error={emailError}
            autoFocus
            placeholder="Email"
            icon={<Icon name="person" size={20} color="rgb(181, 171, 202)" />}
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
          />
          <PrimaryInput
            secureTextEntry
            error={passwordError}
            placeholder="Password"
            icon={<Icon name="lock" size={20} color="rgb(181, 171, 202)" />}
            autoCapitalize="none"
            onChangeText={text => this.setState({ password: text })}
          />
          <BottomText>Forgot Password?</BottomText>
          <PrimaryButton
            title="Sign In"
            onPress={() => {
              this.props.navigation.navigate('Verification')
            }}
            style={{ marginTop: 15 }}
          />
        </Wrapper>
      </RegistrationScreen>
    )
  }
}

import React, { Component } from 'react'
import { Alert } from 'react-native'
import RegistrationScreen from '../../../components/RegistrationScreen'
import { InputContainer, CodeText } from './styles'
import PrimaryButton from '../../../components/PrimaryButton'
import VerificationInput from '../../../components/VerificationInput'

export default class VerificationScreen extends Component {
  constructor() {
    super()
    this.state = {
      disabled: true
    }
  }

  toggleDisabled = () => {
    this.setState({
      disabled: false
    })
  }

  render() {
    const { disabled } = this.state
    return (
      <RegistrationScreen
        navigation={this.props.navigation}
        showBack
        title="Verify your email"
        subtitle="Enter the 4 digit code we sent you to verify your account"
      >
        <CodeText>Enter your code:</CodeText>
        <InputContainer>
          <VerificationInput
            onSubmit={isValid => {
              if (isValid) {
                this.toggleDisabled()
              } else {
                Alert.alert(
                  'Incorrect Code',
                  'Oops! You inputted the wrong code. Please try again.',
                  [{ text: 'OK', onPress: () => {} }],
                  { cancelable: true }
                )
              }
            }}
          />
        </InputContainer>
        <PrimaryButton
          disabled={disabled}
          title="Next"
          onPress={() => this.props.navigation.navigate('Password')}
        />
      </RegistrationScreen>
    )
  }
}

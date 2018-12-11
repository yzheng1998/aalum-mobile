import React, { Component } from 'react'
import { Alert } from 'react-native'
import RegistrationScreen from '../../../components/RegistrationScreen'
import { InputContainer, CodeText } from './styles'
import PrimaryButton from '../../../components/PrimaryButton'
import VerificationInput from './components/VerificationInput'

class VerificationScreen extends Component {
  state = {
    disabled: true
  }

  enableButton = () => {
    this.setState({ disabled: false })
  }

  onSubmit = isValid => {
    if (isValid) {
      this.enableButton()
    } else {
      Alert.alert(
        'Incorrect Code',
        'Oops! You inputted the wrong code. Please try again.',
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: true }
      )
    }
  }

  render() {
    const { disabled } = this.state
    const code = this.props.navigation.getParam('code')
    return (
      <RegistrationScreen
        navigation={this.props.navigation}
        showBack
        title="Verify your email"
        subtitle="Enter the 4 digit code we sent you to verify your account"
      >
        <CodeText>Enter your code:</CodeText>
        <InputContainer>
          <VerificationInput onSubmit={this.onSubmit} code={code} />
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

export default VerificationScreen

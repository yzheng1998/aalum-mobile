import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../../../../../redux/actions'
import PrimaryButton from '../../../../../components/PrimaryButton'
import RegistrationScreen from '../../../../../components/RegistrationScreen'
import PrimaryInput from '../../../../../components/PrimaryInput'
import Icon from '../../../../../components/Icon'
import { TopText, BottomText } from './styles'

const mapDispatchToProps = dispatch => {
  return { addEmail: email => dispatch(addInfo(email)) }
}

class SignUp extends Component {
  state = {
    email: '',
    emailError: ''
  }

  render() {
    const { emailError, email } = this.state
    const enabled = email
    return (
      <RegistrationScreen style={{ marginTop: 66 }}>
        <TopText>Sign up with your .edu or alumni email:</TopText>
        <PrimaryInput
          error={emailError}
          placeholder="Enter your email"
          icon={<Icon name="person" size={20} color="rgb(181, 171, 202)" />}
          autoCapitalize="none"
          onChangeText={text => this.setState({ email: text })}
        />
        <BottomText>
          AALUM helps you find romantic connections with members of your college
          or alumni network. Tap Next to get a verification code sent to your
          email.
        </BottomText>
        <PrimaryButton
          title="Next"
          onPress={() => {
            this.props.addEmail({ key: 'email', value: email })
            this.props.navigation.navigate('Verification')
          }}
          style={{ marginTop: 30 }}
          disabled={!enabled}
        />
      </RegistrationScreen>
    )
  }
}

const SignUpScreen = connect(
  null,
  mapDispatchToProps
)(SignUp)
export default SignUpScreen

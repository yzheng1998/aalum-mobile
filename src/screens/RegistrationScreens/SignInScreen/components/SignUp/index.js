import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../../../../../redux/actions'
import { Alert } from 'react-native'
import { Mutation } from 'react-apollo'
import PrimaryButton from '../../../../../components/PrimaryButton'
import RegistrationScreen from '../../../../../components/RegistrationScreen'
import PrimaryInput from '../../../../../components/PrimaryInput'
import Icon from '../../../../../components/Icon'
import { TopText, BottomText } from './styles'
import constraints from './constraints'
import { VERIFY_EMAIL } from './graphql'

const validate = require('validate.js')

const mapDispatchToProps = dispatch => ({
  addEmail: email => dispatch(addInfo(email))
})

class SignUp extends Component {
  state = {
    email: '',
    emailError: '',
    displayErrors: {},
    errors: {},
    touched: {}
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        email: this.state.email
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

  render() {
    const { displayErrors, errors, email } = this.state
    const enabled = !errors
    return (
      <RegistrationScreen style={{ marginTop: 66 }}>
        <TopText>Sign up with your .edu or alumni email:</TopText>
        <PrimaryInput
          error={displayErrors.email}
          placeholder="Enter your email"
          icon={<Icon name="person" size={20} color="rgb(181, 171, 202)" />}
          autoCapitalize="none"
          onChangeText={text => {
            this.setState({ email: text }, () => this.validateForm(true))
          }}
          onFocus={() => this.addTouched('email')}
          onBlur={() => this.validateForm(false)}
        />
        <BottomText>
          AALUM helps you find romantic connections with members of your college
          or alumni network. Tap Next to get a verification code sent to your
          email.
        </BottomText>
        <Mutation
          mutation={VERIFY_EMAIL}
          variables={{ email }}
          onCompleted={({ sendVerificationCode: { error, code } }) => {
            if (error) return Alert.alert('Could not sign in', error.message)
            this.props.addEmail({ key: 'email', value: email })
            this.props.navigation.navigate('Verification', {
              code: code.toString()
            })
            return true
          }}
          onError={error => Alert.alert('Could not sign in', error.message)}
        >
          {sendVerificationCode => (
            <PrimaryButton
              title="Next"
              onPress={() => sendVerificationCode()}
              style={{ marginTop: 30 }}
              disabled={!enabled}
            />
          )}
        </Mutation>
      </RegistrationScreen>
    )
  }
}

const SignUpScreen = connect(
  null,
  mapDispatchToProps
)(SignUp)
export default SignUpScreen

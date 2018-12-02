import React, { Component } from 'react'
import CodeInput from 'react-native-confirmation-code-input'
import theme from '../../../theme'

export default class VerificationInput extends Component {
  render() {
    const { onSubmit } = this.props
    return (
      <CodeInput
        compareWithCode="1234"
        codeLength={4}
        keyboardType="numeric"
        className="border-box"
        activeColor={theme.colors.gradientRight}
        inactiveColor={theme.colors.grey}
        autoFocus
        ignoreCase
        inputPosition="center"
        space={12}
        size={50}
        codeInputStyle={{
          fontFamily: theme.fonts.bodyText,
          fontSize: 30,
          color: theme.colors.charcoal
        }}
        onFulfill={isValid => onSubmit(isValid)}
      />
    )
  }
}

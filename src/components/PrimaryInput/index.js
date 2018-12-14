import React, { Component } from 'react'
import {
  InputField,
  RoundContainer,
  Icon,
  MainContainer,
  Title,
  ErrorMessage
} from './styles'

class PrimaryInput extends Component {
  focus = () => {
    this.textInput.focus()
  }

  render() {
    const { as, onPress, icon, title, error, ...rest } = this.props
    return (
      <MainContainer>
        {title && <Title error={error}>{title}</Title>}
        <RoundContainer as={as} onPress={onPress} error={error}>
          <InputField
            ref={input => {
              this.textInput = input
            }}
            autoCorrect={false}
            icon={icon}
            autoCapitalize="none"
            {...rest}
          />
          {icon && <Icon>{icon}</Icon>}
        </RoundContainer>
        <ErrorMessage>{error || ''}</ErrorMessage>
      </MainContainer>
    )
  }
}

export default PrimaryInput

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
  render() {
    const { icon, title, error, ...rest } = this.props
    return (
      <MainContainer>
        {title && <Title error={error}>{title}</Title>}
        <RoundContainer error={error}>
          <InputField icon={icon} autoCapitalize="none" {...rest} />
          {icon && <Icon>{icon}</Icon>}
        </RoundContainer>
        <ErrorMessage>{error || ''}</ErrorMessage>
      </MainContainer>
    )
  }
}

export default PrimaryInput

import React, { Component } from 'react'
import { View } from 'react-native'
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
        {title ? <Title error={error}>{title}</Title> : <View />}
        <RoundContainer error={error}>
          <InputField icon={icon} {...rest} />
          {icon ? <Icon>{icon}</Icon> : <View />}
        </RoundContainer>
        <ErrorMessage>{error || ''}</ErrorMessage>
      </MainContainer>
    )
  }
}

export default PrimaryInput

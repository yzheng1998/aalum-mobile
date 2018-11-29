import React, { Component } from 'react'
import { View } from 'react-native'
import {
  InputField,
  FullView,
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
        <FullView error={error}>
          <InputField icon={icon} {...rest} />
          {icon ? <Icon>{icon}</Icon> : <View />}
        </FullView>
        {error ? <ErrorMessage>{error}</ErrorMessage> : <View />}
      </MainContainer>
    )
  }
}

export default PrimaryInput

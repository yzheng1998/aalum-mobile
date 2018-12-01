import React, { Component } from 'react'
import PrimaryInput from '../PrimaryInput'
import { SecurityToggle } from './styles'
import Icon from 'react-native-vector-icons/Entypo'
import theme from '../../../theme'

export default class PasswordInput extends Component {
  state = {
    secure: true
  }

  render() {
    const { ...rest } = this.props
    const { secure } = this.state
    return (
      <PrimaryInput
        placeholder="Password"
        secureTextEntry={secure}
        {...rest}
        icon={
          <SecurityToggle onPress={() => this.setState({ secure: !secure })}>
            {secure ? (
              <Icon
                name="eye"
                size={20}
                style={{ marginTop: 2, marginRight: 2 }}
                color={theme.colors.black}
              />
            ) : (
              <Icon
                name="eye-with-line"
                size={20}
                style={{ marginTop: 2, marginRight: 2 }}
                color={theme.colors.grey}
              />
            )}
          </SecurityToggle>
        }
      />
    )
  }
}

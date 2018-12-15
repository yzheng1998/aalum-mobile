import React, { Component } from 'react'
import PrimaryInput from '../PrimaryInput'
import { SecurityToggle } from './styles'
import Icon from 'react-native-vector-icons/Entypo'
import theme from '../../../theme'
import { buttonRadius } from '../../../constants'

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
          <SecurityToggle
            touchSlop={buttonRadius}
            onPress={() => this.setState({ secure: !secure })}
          >
            <Icon
              name={secure ? 'eye' : 'eye-with-line'}
              size={20}
              style={{ marginTop: 2, marginRight: 2 }}
              color={secure ? theme.colors.black : theme.colors.grey}
            />
          </SecurityToggle>
        }
      />
    )
  }
}

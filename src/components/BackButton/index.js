import React, { Component } from 'react'
import Icon from '../Icon'
import { IconWrapper } from './styles'
import { buttonRadius } from '../../../constants'

export default class BackButton extends Component {
  render() {
    return (
      <IconWrapper hitSlop={buttonRadius} onPress={this.props.onPress}>
        <Icon name="arrow-back" color="#ADADAD" size={30} />
      </IconWrapper>
    )
  }
}

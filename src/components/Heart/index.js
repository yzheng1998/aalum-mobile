import React, { Component } from 'react'
import { Icn } from './styles'

class Heart extends Component {
  render() {
    const { active } = this.props
    return <Icn active={active} name={active ? 'heart' : 'heart-empty'} />
  }
}

export default Heart

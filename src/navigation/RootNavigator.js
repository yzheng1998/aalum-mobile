import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import RegistrationStack from './RegistrationStack'

export default class RootNavigator extends Component {
  render() {
    const RootNavigatorComponent = createAppContainer(RegistrationStack)
    return <RootNavigatorComponent />
  }
}

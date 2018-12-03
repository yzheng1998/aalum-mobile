import React, { Component } from 'react'
import { View } from './styles'
import BackButton from '../BackButton'
import { StatusBar } from 'react-native'
import { Title } from '../Title'
import { Subtitle } from '../Subtitle'

export default class RegistrationScreen extends Component {
  render() {
    const {
      showBack,
      children,
      title,
      subtitle,
      navigation,
      image
    } = this.props
    return (
      <View>
        <StatusBar hidden />
        {image}
        {showBack && <BackButton onPress={() => navigation.goBack()} />}
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </View>
    )
  }
}

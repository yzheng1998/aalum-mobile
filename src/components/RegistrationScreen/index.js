import React, { Component } from 'react'
import { SafeAreaView, Screen, Image } from './styles'
import BackButton from '../BackButton'
import { StatusBar } from 'react-native'
import { Title } from '../Title'
import { Subtitle } from '../Subtitle'
import ProgressBar from '../ProgressBar'

export default class RegistrationScreen extends Component {
  render() {
    const {
      showBack,
      children,
      title,
      subtitle,
      navigation,
      source,
      imageStyle,
      progress,
      ...rest
    } = this.props
    return (
      <SafeAreaView {...rest}>
        <Screen keyboardShouldPersistTaps="handled" scrollEnabled={false}>
          <StatusBar hidden />
          {progress && <ProgressBar progress={progress} />}
          {showBack && <BackButton onPress={() => navigation.goBack()} />}
          <Image source={source} style={imageStyle} />
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {children}
        </Screen>
      </SafeAreaView>
    )
  }
}

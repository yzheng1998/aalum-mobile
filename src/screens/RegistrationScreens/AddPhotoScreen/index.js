import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import { View } from 'react-native'
import PhotoUpload from './PhotoUpload'

export default class AddPhotoScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Add a Photo"
        subtitle="Please upload your favorite photo of yourself! You’ll be able to add and edit photos later."
      >
        <PhotoUpload />
        <PrimaryButton
          title="Continue"
          onPress={() => this.props.navigation.navigate('Location')}
          style={{ marginTop: 29 }}
        />
      </RegistrationScreen>
    )
  }
}

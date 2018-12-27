import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { SIGN_S3_URL } from './graphql'
import { Alert, Platform } from 'react-native'

import ImagePicker from 'react-native-image-crop-picker'
import RNFetchBlob from 'rn-fetch-blob'

import ActionSheet from 'react-native-actionsheet'

export default class CameraMenu extends Component {
  showActionSheet = () => {
    this.ActionSheet.show()
  }

  onPhotoUploadPress = (signS3Url, index) => {
    const { updateState } = this.props
    if (index === 0) {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true
      }).then(imageData => {
        const variables = this.parseVariables(imageData)
        updateState({ imageData }, () => {
          signS3Url({ variables })
        })
      })
    }
    if (index === 1) {
      ImagePicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
        useFrontCamera: true
      }).then(imageData => {
        const variables = this.parseVariables(imageData)
        updateState({ imageData }, () => {
          signS3Url({ variables })
        })
      })
    }
  }

  parseVariables = imageData => {
    const fileName =
      Platform.OS === 'ios' ? imageData.path : imageData.path.split('/').pop()
    return {
      signS3UrlInput: {
        fileName,
        contentType: imageData.mime
      }
    }
  }

  handleComplete = async ({ signS3Url: { url: signedUrl } }) => {
    const { imageData, addInfo, updateState } = this.props
    RNFetchBlob.fetch(
      'PUT',
      signedUrl,
      { 'Content-Type': imageData.mime },
      RNFetchBlob.wrap(imageData.path)
    )
    const url = signedUrl.split('?')[0]
    updateState({ photo: url })
    addInfo({ key: 'photo', value: url })
    addInfo({ key: 'imageData', value: imageData })
  }

  handleError = error => Alert.alert('Could not upload photo', error.message)

  render() {
    return (
      <Mutation
        mutation={SIGN_S3_URL}
        onCompleted={this.handleComplete}
        onError={this.handleError}
      >
        {signS3Url => (
          <ActionSheet
            ref={actionSheet => {
              this.ActionSheet = actionSheet
            }}
            options={['Open Camera Roll', 'Take Photo', 'Cancel']}
            cancelButtonIndex={2}
            onPress={index => {
              this.onPhotoUploadPress(signS3Url, index)
            }}
          />
        )}
      </Mutation>
    )
  }
}

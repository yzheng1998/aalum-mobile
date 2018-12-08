import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Camera from 'react-native-vector-icons/Entypo'
import ImagePicker from 'react-native-image-crop-picker'
import { Platform } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'

import { PhotoUploader, MainPhoto, PlusSign, PlusSignWrapper } from './styles'
import { SIGN_S3_URL } from './graphql'

const parseVariables = image => {
  if (Platform.OS === 'ios') {
    return {
      signS3UrlInput: {
        fileName: image.filename,
        contentType: image.mime
      }
    }
  }
  const fileName = image.path.split('/').pop()
  return {
    signS3UrlInput: {
      fileName,
      contentType: image.mime
    }
  }
}

class PhotoUpload extends Component {
  state = { image: '', imageUrl: '' }

  handleComplete = async ({ signS3Url: { url: signedUrl } }) => {
    const { image } = this.state
    const { callback } = this.props
    RNFetchBlob.fetch(
      'PUT',
      signedUrl,
      { 'Content-Type': image.mime },
      RNFetchBlob.wrap(image.path)
    )
    const url = signedUrl.split('?')[0]
    this.setState({ imageUrl: url }, () => callback(url))
  }

  onPhotoUploadPress = signS3Url => {
    const { imageUrl } = this.state
    const { callback } = this.props
    if (imageUrl) {
      this.setState({ imageUrl: '', image: null }, () => callback(''))
    } else {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true
      }).then(data => {
        const variables = parseVariables(data)
        this.setState({ image: data }, () => {
          signS3Url({ variables })
        })
      })
    }
  }

  render() {
    const { image, imageUrl } = this.state
    return (
      <Mutation mutation={SIGN_S3_URL} onCompleted={this.handleComplete}>
        {signS3Url => (
          <PhotoUploader
            onPress={() => this.onPhotoUploadPress(signS3Url)}
            border={imageUrl}
          >
            {imageUrl ? (
              <MainPhoto source={{ uri: image.sourceURL }} />
            ) : (
              <Camera name="camera" size={90} color="#bdbdbd" />
            )}
            <PlusSignWrapper>
              <PlusSign color={imageUrl}>
                <Camera
                  name={imageUrl ? 'cross' : 'plus'}
                  size={50}
                  style={{ marginBottom: -5, textAlign: 'center' }}
                  color="white"
                />
              </PlusSign>
            </PlusSignWrapper>
          </PhotoUploader>
        )}
      </Mutation>
    )
  }
}

export default PhotoUpload

import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Camera from 'react-native-vector-icons/Entypo'
import ImagePicker from 'react-native-image-crop-picker'
import { Platform, Alert } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'

import { PhotoUploader, MainPhoto, PlusSign, PlusSignWrapper } from './styles'
import { SIGN_S3_URL } from './graphql'

class PhotoUpload extends Component {
  state = {
    imageData: ''
  }

  onPhotoUploadPress = signS3Url => {
    const { setPhoto, photo } = this.props
    if (photo) {
      setPhoto('')
    } else {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true
      }).then(imageData => {
        const variables = this.parseVariables(imageData)
        this.setState({ imageData }, () => {
          signS3Url({ variables })
        })
      })
    }
  }

  parseVariables = imageData => {
    if (Platform.OS === 'ios') {
      return {
        signS3UrlInput: {
          fileName: imageData.filename,
          contentType: imageData.mime
        }
      }
    }
    const fileName = imageData.path.split('/').pop()
    return {
      signS3UrlInput: {
        fileName,
        contentType: imageData.mime
      }
    }
  }

  handleComplete = async ({ signS3Url: { url: signedUrl } }) => {
    const { imageData } = this.state
    const { setPhoto } = this.props
    RNFetchBlob.fetch(
      'PUT',
      signedUrl,
      { 'Content-Type': imageData.mime },
      RNFetchBlob.wrap(imageData.path)
    )
    const url = signedUrl.split('?')[0]
    setPhoto(url)
  }

  handleError = error => Alert.alert('Could not upload photo', error.message)

  render() {
    const { imageData } = this.state
    const { photo } = this.props
    return (
      <Mutation
        mutation={SIGN_S3_URL}
        onCompleted={this.handleComplete}
        onError={this.handleError}
      >
        {signS3Url => (
          <PhotoUploader
            onPress={() => this.onPhotoUploadPress(signS3Url)}
            border={photo}
          >
            {photo ? (
              <MainPhoto source={{ uri: imageData.path }} />
            ) : (
              <Camera name="camera" size={90} color="#bdbdbd" />
            )}
            <PlusSignWrapper>
              <PlusSign color={photo}>
                <Camera
                  name={photo ? 'cross' : 'plus'}
                  size={50}
                  style={{ marginTop: 4, textAlign: 'center' }}
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

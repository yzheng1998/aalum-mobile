import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Camera from 'react-native-vector-icons/Entypo'
import ImagePicker from 'react-native-image-crop-picker'
import { Platform } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'

import { PhotoUploader, MainPhoto } from './styles'
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
  render() {
    const { image } = this.state
    return (
      <Mutation
        mutation={SIGN_S3_URL}
        onCompleted={async ({ signS3Url: { url: signedUrl } }) => {
          const { image } = this.state
          const options = {
            headers: {
              'Content-Type': image.mime
            }
          }
          RNFetchBlob.fetch(
            'PUT',
            signedUrl,
            { 'Content-Type': image.mime },
            RNFetchBlob.wrap(image.path)
          )
          this.setState({ imageUrl: signedUrl.split('?')[0] }, () =>
            console.log(this.state.imageUrl)
          )
        }}
      >
        {signS3Url => (
          <PhotoUploader
            onPress={() =>
              ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropping: true
              }).then(image => {
                const variables = parseVariables(image)
                this.setState({ image }, () => {
                  signS3Url({ variables })
                })
              })
            }
          >
            {image ? (
              <MainPhoto source={{ uri: image.sourceURL }} />
            ) : (
              <Camera name="camera" size={90} color="#bdbdbd" />
            )}
          </PhotoUploader>
        )}
      </Mutation>
    )
  }
}

export default PhotoUpload

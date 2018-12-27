import React, { Component } from 'react'
import Camera from 'react-native-vector-icons/Entypo'
import { PhotoUploader, MainPhoto, PlusSign, PlusSignWrapper } from './styles'

class PhotoUpload extends Component {
  render() {
    const { photo, showActionSheet, imageData } = this.props
    return (
      <PhotoUploader onPress={showActionSheet} border={photo}>
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
    )
  }
}

export default PhotoUpload

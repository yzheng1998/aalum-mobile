import React, { Component } from 'react'
import { Alert, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import { Mutation } from 'react-apollo'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import _ from 'lodash'

import PhotoUpload from './components/PhotoUpload'
import CameraMenu from './components/CameraMenu'
import { REGISTER_USER } from './graphql'

const mapStateToProps = state => ({
  state,
  photo: state.photo,
  imageData: state.imageData
})

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info))
})

class AddPhotoScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      imageData: this.props.imageData || '',
      photo: this.props.photo || ''
    }
  }

  onCompleted = async ({ register: { user, token } }) => {
    await AsyncStorage.setItem('token', token)
    await AsyncStorage.setItem('userId', user.id)
    this.props.navigation.navigate('Location')
  }

  showActionSheet = () => {
    if (this.state.photo) {
      this.setState({ photo: '' })
      this.props.addInfo({ key: 'photo', value: null })
      this.props.addInfo({ key: 'imageData', value: null })
    } else this.cameraMenu.showActionSheet()
  }

  render() {
    const { photo, imageData } = this.state
    const variables = { input: _.omit(this.props.state, 'imageData') }
    const enabled = photo
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Add a Photo"
        subtitle="Please upload your favorite photo of yourself! You’ll be able to add and edit photos later."
        progress="95%"
        scrollEnabled
      >
        <PhotoUpload
          showActionSheet={this.showActionSheet}
          photo={photo}
          imageData={imageData}
        />
        <Mutation
          mutation={REGISTER_USER}
          variables={variables}
          onCompleted={this.onCompleted}
          onError={error =>
            Alert.alert("Couldn't register user", error.message)
          }
        >
          {register => (
            <PrimaryButton
              title="Continue"
              onPress={() => register()}
              style={{ marginTop: 29 }}
              disabled={!enabled}
            />
          )}
        </Mutation>
        <CameraMenu
          ref={cameraMenu => {
            this.cameraMenu = cameraMenu
          }}
          imageData={imageData}
          addInfo={this.props.addInfo}
          updateState={this.updateState}
        />
      </RegistrationScreen>
    )
  }
}

const AddPhoto = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPhotoScreen)
export default AddPhoto

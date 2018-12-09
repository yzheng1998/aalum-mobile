import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PhotoUpload from './PhotoUpload'

const mapDispatchToProps = dispatch => ({
  addPhoto: photo => dispatch(addInfo(photo))
})

class AddPhotoScreen extends Component {
  state = { photo: '' }

  setPhoto = photo => this.setState({ photo })

  render() {
    const { photo } = this.state
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Add a Photo"
        subtitle="Please upload your favorite photo of yourself! You’ll be able to add and edit photos later."
        progress="95%"
      >
        <PhotoUpload callback={this.setPhoto} />
        <PrimaryButton
          title="Continue"
          onPress={() => {
            this.props.addPhoto({ key: 'photo', value: photo })
            this.props.navigation.navigate('Location')
          }}
          style={{ marginTop: 29 }}
        />
      </RegistrationScreen>
    )
  }
}

const AddPhoto = connect(
  null,
  mapDispatchToProps
)(AddPhotoScreen)
export default AddPhoto

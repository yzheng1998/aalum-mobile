import React, { Component } from 'react'
import { Alert, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { Mutation } from 'react-apollo'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PhotoUpload from './PhotoUpload'
import { REGISTER_USER } from './graphql'

const mapStateToProps = state => ({
  state
})

class AddPhotoScreen extends Component {
  state = {
    photo: ''
  }

  setPhoto = photo => this.setState({ photo })

  onCompleted = async ({ register: { user, token } }) => {
    await AsyncStorage.setItem('token', token)
    await AsyncStorage.setItem('userId', user.id)
    this.props.navigation.navigate('Location')
  }

  render() {
    const { photo } = this.state
    const variables = { ...this.props.state, photo }
    return (
      <RegistrationScreen
        showBack
        navigation={this.props.navigation}
        title="Add a Photo"
        subtitle="Please upload your favorite photo of yourself! You’ll be able to add and edit photos later."
        progress="95%"
      >
        <PhotoUpload callback={this.setPhoto} />
        <Mutation
          mutation={REGISTER_USER}
          variables={{ variables }}
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
            />
          )}
        </Mutation>
      </RegistrationScreen>
    )
  }
}

const AddPhoto = connect(
  mapStateToProps
  // mapDispatchToProps
)(AddPhotoScreen)
export default AddPhoto

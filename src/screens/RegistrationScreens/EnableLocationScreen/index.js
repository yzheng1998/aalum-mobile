import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import LocationGraphic from '../../../../assets/images/registrationFlow/LocationGraphic.png'
import { imageStyle } from './styles'

const mapStateToProps = state => {
  return { state: state }
}

class EnableLocationScreen extends Component {
  render() {
    console.log(this.props.state)
    return (
      <RegistrationScreen
        title="Enable Location"
        subtitle="AALUM uses your location to find matches near you."
        source={LocationGraphic}
        imageStyle={imageStyle}
      >
        <PrimaryButton
          title="Allow Location"
          onPress={() => this.props.navigation.navigate('Notifications')}
          style={{ marginTop: 29 }}
        />
      </RegistrationScreen>
    )
  }
}

const EnableLocation = connect(mapStateToProps)(EnableLocationScreen)
export default EnableLocation

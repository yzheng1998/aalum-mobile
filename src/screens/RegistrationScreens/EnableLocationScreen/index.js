import React, { Component } from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import LocationGraphic from '../../../../assets/images/registrationFlow/LocationGraphic.png'
import { Image, imageStyle } from './styles'

export default class EnableLocationScreen extends Component {
  render() {
    return (
      <RegistrationScreen
        title="Enable Location"
        subtitle="AALUM uses your location to find matches near you."
        image={<Image source={LocationGraphic} style={imageStyle} />}
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

import React from 'react'
import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import LocationGraphic from '../../../../assets/images/registrationFlow/LocationGraphic.png'
import { imageStyle } from './styles'
import { setPosition } from '../../../../AppUtilities/geolocation'

const EnableLocationScreen = () => (
  <RegistrationScreen
    title="Enable Location"
    subtitle="AALUM uses your location to find matches near you."
    source={LocationGraphic}
    imageStyle={imageStyle}
  >
    <PrimaryButton
      title="Allow Location"
      onPress={() => {
        setPosition(() => this.props.navigation.navigate('Notifications'))
      }}
      style={{ marginTop: 29 }}
    />
  </RegistrationScreen>
)

export default EnableLocationScreen

import { client } from '../src/apollo'
import { UPDATE_LOCATION } from './mutations'
import { Alert } from 'react-native'

export const setPosition = callback => {
  navigator.geolocation.getCurrentPosition(
    position => {
      client
        .mutate({
          variables: {
            coordinateInput: {
              lat: position.coords.latitude,
              long: position.coords.longitude
            }
          },
          mutation: UPDATE_LOCATION
        })
        .then(() => {
          if (callback) callback()
        })
    },
    error =>
      Alert.alert('Something Went Wrong', 'Could not get your location', error)
  )
}

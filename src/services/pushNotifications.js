import PushNotification from 'react-native-push-notification'
import { PushNotificationIOS, Alert } from 'react-native'
import { client } from '../apollo'
import gql from 'graphql-tag'

import config from '../../config'

const configure = callback => {
  PushNotification.configure({
    onRegister(token) {
      client
        .mutate({
          variables: {
            registerDeviceInput: {
              type: token.os.toUpperCase(),
              deviceId: token.token
            }
          },
          mutation: gql`
            mutation registerDevice(
              $registerDeviceInput: RegisterDeviceInput!
            ) {
              registerDevice(registerDeviceInput: $registerDeviceInput) {
                error {
                  message
                }
              }
            }
          `
        })
        .then(() => {
          if (callback) callback()
        })
        .catch(() => {
          Alert.alert(
            'Something Went Wrong',
            'Could not Register for Push Notifications'
          )
        })
      return token.length
    },

    onNotification(notification) {
      notification.finish(PushNotificationIOS.FetchResult.NoData)
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true
    },
    senderID: config.gcmSenderId,

    popInitialNotification: false,
    requestPermissions: true
  })
}

const localNotification = () => {
  setTimeout(() => {
    PushNotification.localNotification({
      autoCancel: true,
      vibrate: true,
      vibration: 300,
      title: 'Notification Title',
      message: 'Notification Message'
    })
  }, 5000)
}

export { configure, localNotification }

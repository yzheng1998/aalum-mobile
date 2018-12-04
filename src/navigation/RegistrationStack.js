import { createStackNavigator } from 'react-navigation'
import SignInScreen from '../screens/RegistrationScreens/SignInScreen'
import GenderScreen from '../screens/RegistrationScreens/GenderScreen'
import ResetPasswordScreen from '../screens/RegistrationScreens/ResetPasswordScreen'
import VerificationScreen from '../screens/RegistrationScreens/VerificationScreen'
import CreatePasswordScreen from '../screens/RegistrationScreens/CreatePasswordScreen'
import IntroduceYourselfScreen from '../screens/RegistrationScreens/IntroduceYourselfScreen'
import SeekingGenderScreen from '../screens/RegistrationScreens/SeekingGenderScreen'
import AddPhotoScreen from '../screens/RegistrationScreens/AddPhotoScreen'
import EnableLocationScreen from '../screens/RegistrationScreens/EnableLocationScreen'
import EnableNotificationsScreen from '../screens/RegistrationScreens/EnableNotificationsScreen'
import ForgotPasswordScreen from '../screens/RegistrationScreens/ForgotPasswordScreen'

const RegistrationStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false
      })
    },
    Verification: {
      screen: VerificationScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Password: {
      screen: CreatePasswordScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false
      })
    },
    IntroduceYourself: {
      screen: IntroduceYourselfScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Gender: {
      screen: GenderScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Seeking: {
      screen: SeekingGenderScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Photo: {
      screen: AddPhotoScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Location: {
      screen: EnableLocationScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false
      })
    },
    Notifications: {
      screen: EnableNotificationsScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false
      })
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    ResetPassword: {
      screen: ResetPasswordScreen,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: 'Photo',
    headerMode: 'screen'
  }
)

export default RegistrationStack

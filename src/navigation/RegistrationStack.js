import { createStackNavigator } from 'react-navigation'
import SignInScreen from '../screens/SignInScreen'
import GenderScreen from '../screens/GenderScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import VerificationScreen from '../screens/VerificationScreen'
import CreatePasswordScreen from '../screens/CreatePasswordScreen'
import IntroduceYourselfScreen from '../screens/IntroduceYourselfScreen'
import SeekingGenderScreen from '../screens/SeekingGenderScreen'
import AddPhotoScreen from '../screens/AddPhotoScreen'
import EnableLocationScreen from '../screens/EnableLocationScreen'
import EnableNotificationsScreen from '../screens/EnableNotificationsScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'

const RegistrationStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: () => ({
        header: null
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
        header: null
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
    SeekingGender: {
      screen: SeekingGenderScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    AddPhoto: {
      screen: AddPhotoScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    EnableLocation: {
      screen: EnableLocationScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    EnableNotifications: {
      screen: EnableNotificationsScreen,
      navigationOptions: () => ({
        header: null
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
    initialRouteName: 'SignIn',
    headerMode: 'screen'
  }
)

export default RegistrationStack

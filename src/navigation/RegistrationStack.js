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

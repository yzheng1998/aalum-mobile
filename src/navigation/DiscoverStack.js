import { createStackNavigator } from 'react-navigation'
import SwipeScreen from '../screens/DiscoverScreens/SwipeScreen'
import SearchScreen from '../screens/DiscoverScreens/SearchScreen'
import FilterScreen from '../screens/DiscoverScreens/FilterScreen'
import UserScreen from '../screens/DiscoverScreens/UserScreen'

const DiscoverStack = createStackNavigator(
  {
    Swipe: {
      screen: SwipeScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false
      })
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false
      })
    },
    Filter: {
      screen: FilterScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false
      })
    },
    User: {
      screen: UserScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false
      })
    }
  },
  {
    initialRouteName: 'Swipe',
    headerMode: 'screen'
  }
)

export default DiscoverStack

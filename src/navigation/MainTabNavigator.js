import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import DiscoverStack from './DiscoverStack'
import { View } from 'react-native'
import NotificationsScreen from '../screens/NotificationScreens/NotificationsScreen'
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen'
import MessagesScreen from '../screens/MessageScreens/MessagesScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import User from 'react-native-vector-icons/FontAwesome5'
import Message from 'react-native-vector-icons/Feather'
import theme from '../../theme'

const MainTabNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverStack,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon
            name="cards-outline"
            size={30}
            border=" 2px solid"
            color={focused ? theme.colors.gradientLeft : theme.colors.lightGrey}
          />
        )
      })
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Message
            name="message-circle"
            size={30}
            border=" 2px solid"
            color={focused ? theme.colors.gradientLeft : theme.colors.lightGrey}
          />
        )
      })
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon
            name="bell-outline"
            size={32}
            border=" 2px solid"
            color={focused ? theme.colors.gradientLeft : theme.colors.lightGrey}
          />
        )
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <User
            name="user"
            size={25}
            border=" 2px solid"
            color={focused ? theme.colors.gradientLeft : theme.colors.lightGrey}
          />
        )
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
)

class MainTabWrapper extends Component {
  render() {
    return (
      <View style={{ flex: 1, height: 70 }}>
        <MainTabNavigator navigation={this.props.navigation} />
      </View>
    )
  }
}

MainTabWrapper.router = MainTabNavigator.router

export default MainTabWrapper

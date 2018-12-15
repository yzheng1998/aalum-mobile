import React, { Component } from 'react'
import { Dimensions, View, ScrollView, Platform, Keyboard } from 'react-native'
import {
  GreyBar,
  TabContainer,
  labelStyle,
  tabStyle,
  indicatorStyle,
  tabBarStyle,
  tabViewStyle,
  imageStyle
} from './styles'
import Logo from '../../../../assets/images/registrationFlow/Logo.png'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import RegistrationScreen from '../../../components/RegistrationScreen'

export default class SignInScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Sign In' },
      { key: 'second', title: 'Sign Up' }
    ]
  }

  FirstRoute = () => <SignIn navigation={this.props.navigation} />

  SecondRoute = () => <SignUp navigation={this.props.navigation} />

  renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      tabStyle={tabStyle}
      labelStyle={labelStyle}
      style={tabBarStyle}
      indicatorStyle={indicatorStyle}
    />
  )

  render() {
    return (
      <RegistrationScreen
        as={Platform.OS === 'ios' ? ScrollView : View}
        source={Logo}
        imageStyle={imageStyle}
      >
        <TabContainer>
          <GreyBar />
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: this.FirstRoute,
              second: this.SecondRoute
            })}
            onIndexChange={index => {
              Keyboard.dismiss()
              this.setState({ index })
            }}
            initialLayout={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height
            }}
            renderTabBar={this.renderTabBar}
            style={tabViewStyle}
          />
        </TabContainer>
      </RegistrationScreen>
    )
  }
}

import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import {
  GreyBar,
  TabContainer,
  labelStyle,
  tabStyle,
  indicatorStyle,
  tabBarStyle,
  tabViewStyle
} from './styles'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import RegistrationScreen from '../../../components/RegistrationScreen'

export default class SignInScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Sign In' },
        { key: 'second', title: 'Sign Up' }
      ],
      FirstRoute: () => <SignIn navigation={props.navigation} />,
      SecondRoute: () => <SignUp navigation={props.navigation} />
    }
  }

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
    const { FirstRoute, SecondRoute } = this.state
    return (
      <RegistrationScreen>
        <TabContainer>
          <GreyBar />
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute
            })}
            onIndexChange={index => this.setState({ index })}
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

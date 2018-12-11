import React, { Component } from 'react'
import { Dimensions, View } from 'react-native'
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
import { TabView, TabBar, TabViewPage, SceneMap } from 'react-native-tab-view'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import RegistrationScreen from '../../../components/RegistrationScreen'

// const FirstRoute = props => <SignIn />

// const SecondRoute = props => <SignUp />

export default class SignInScreen extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     index: 0,
  //     routes: [
  //       { key: 'first', title: 'Sign In' },
  //       { key: 'second', title: 'Sign Up' }
  //     ]
  //   }
  // }

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

  // renderScene = ({ route }) => {
  //   switch (route.key) {
  //     case 'first':
  //       return <SignIn navigation={props.navigation} />
  //     case 'second':
  //       return <SignUp navigation={props.navigation} />
  //     default:
  //       return <View />
  //   }
  // }

  // renderPage = props => {
  //   return <TabViewPage {...props} renderScene={this.renderScene} />
  // }

  render() {
    // const { FirstRoute, SecondRoute } = this.state
    return (
      <RegistrationScreen source={Logo} imageStyle={imageStyle}>
        <TabContainer>
          <GreyBar />
          <TabView
            navigationState={this.state}
            // renderScene={this.renderPage}
            renderScene={SceneMap({
              first: this.FirstRoute,
              second: this.SecondRoute
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

// import React, { Component } from 'react'
// import { View, StyleSheet, Dimensions } from 'react-native'
// import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

// const FirstRoute = props => <SignIn navigation={props.navigation} />
// const SecondRoute = props => <SignUp navigation={props.navigation} />

// export default class TabViewExample extends Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'first', title: 'Sign In' },
//       { key: 'second', title: 'Sign Up' }
//     ]
//   }

//   renderTabBar = props => (
//     <TabBar
//       {...props}
//       scrollEnabled
//       tabStyle={tabStyle}
//       labelStyle={labelStyle}
//       style={tabBarStyle}
//       indicatorStyle={indicatorStyle}
//     />
//   )

//   render() {
//     return (
//       <RegistrationScreen source={Logo} imageStyle={imageStyle}>
//         <TabContainer>
//           <TabView
//             navigationState={this.state}
//             renderScene={SceneMap({
//               first: () => FirstRoute(this.props),
//               second: () => SecondRoute(this.props)
//             })}
//             onIndexChange={index => this.setState({ index })}
//             initialLayout={{ width: Dimensions.get('window').width }}
//             renderTabBar={this.renderTabBar}
//           />
//         </TabContainer>
//       </RegistrationScreen>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   scene: {
//     flex: 1
//   }
// })

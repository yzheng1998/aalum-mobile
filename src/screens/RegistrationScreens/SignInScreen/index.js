import * as React from 'react'
import { Dimensions } from 'react-native'
import { GreyBar, TabContainer } from './styles'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import theme from '../../../../theme'
import RegistrationScreen from '../../../components/RegistrationScreen'

export default class SignInScreen extends React.Component {
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
      tabStyle={{ width: 123 }}
      labelStyle={{
        color: theme.colors.gradientRight,
        fontFamily: theme.fonts.title,
        fontSize: 16,
        marginBottom: 4
      }}
      style={{
        marginRight: 64,
        marginLeft: 64,
        backgroundColor: 'transparent'
      }}
      indicatorStyle={{
        backgroundColor: theme.colors.gradientRight,
        height: 3
      }}
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
            style={{ backgroundColor: 'transparent', marginTop: 30 }}
          />
        </TabContainer>
      </RegistrationScreen>
    )
  }
}

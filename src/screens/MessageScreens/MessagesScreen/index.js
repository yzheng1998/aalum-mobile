import React, { Component } from 'react'
import { View, Dimensions, Keyboard } from 'react-native'
import { Screen } from './styles'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import ScreenHeader from '../../../components/ScreenHeader'
import ConnectionsActiveIcon from '../../../../assets/icons/ConnectionsRed.png'
import ConnectionsInactiveIcon from '../../../../assets/icons/ConnectionsGray.png'
import MatchMakersInactiveIcon from '../../../../assets/icons/MatchMakersGray.png'
import MatchMakersActiveIcon from '../../../../assets/icons/MatchMakersActive.png'
import AdmirersInactiveIcon from '../../../../assets/icons/AdmirersGray.png'
import AdmirersActiveIcon from '../../../../assets/icons/AdmirersActive.png'
import ConnectionTabButton from '../../../components/ConnectionTabButton'

export default class MessagesScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Connections' },
      { key: 'second', title: 'MatchMakers' },
      { key: 'third', title: 'Admirers' }
    ]
  }

  renderTabBar = props => {
    return (
      <TabBar
        {...props}
        renderLabel={this.renderLabel}
        renderIndicator={this.renderIndicator}
        style={{ backgroundColor: 'transparent' }}
      />
    )
  }

  renderIcon = (route, focused) => {
    switch (route.key) {
      case 'first':
        return focused ? ConnectionsActiveIcon : ConnectionsInactiveIcon

      case 'second':
        return focused ? MatchMakersActiveIcon : MatchMakersInactiveIcon

      case 'third':
        return focused ? AdmirersActiveIcon : AdmirersInactiveIcon

      default:
        return null
    }
  }

  renderLabel = ({ route }) => {
    const focused = this.state.routes.indexOf(route) === this.state.index
    return (
      <ConnectionTabButton
        text={route.title}
        active={focused}
        icon={this.renderIcon(route, focused)}
      />
    )
  }

  renderIndicator = () => null

  FirstRoute = () => <View style={{ backgroundColor: '#ff4081' }} />
  SecondRoute = () => <View style={{ backgroundColor: 'blue' }} />

  render() {
    return (
      <Screen>
        <ScreenHeader
          navigation={this.props.navigation}
          title="Messages"
          showBack
        />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: this.FirstRoute,
            second: this.SecondRoute,
            third: this.FirstRoute
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
        />
      </Screen>
    )
  }
}

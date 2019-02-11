import React, { Component } from 'react'
import { Screen } from './styles'
import SearchBar from './components/SearchBar'
import ScreenHeader from '../../../components/ScreenHeader'

export default class SearchScreen extends Component {
  render() {
    return (
      <Screen>
        <ScreenHeader
          navigation={this.props.navigation}
          title="Search"
          showBack
        />
        <SearchBar />
      </Screen>
    )
  }
}

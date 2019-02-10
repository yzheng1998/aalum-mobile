import React, { Component } from 'react'
import { Screen } from './styles'
import SearchBar from './components/SearchBar'
import ScreenHeader from '../../../components/ScreenHeader'
import UserSearchCard from './components/UserSearchCard'

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
        <UserSearchCard
          profilePicture="https://i.ytimg.com/vi/nIV26rVCWjw/maxresdefault.jpg"
          name="Arthur"
          age={39}
          location="Atlantis, FL"
          school="University of Florida"
          degree="B.A"
          year={2001}
          isInterested={false}
        />
      </Screen>
    )
  }
}

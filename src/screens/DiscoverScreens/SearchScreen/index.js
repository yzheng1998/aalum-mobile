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
          profilePicture="https://media.licdn.com/dms/image/C4D03AQEimgIJC3va5g/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=RpwoPYFCUcjYQbkCJeIGaEnqWfTug0k_i2brmKMIL64"
          name="Arthur"
        />
      </Screen>
    )
  }
}

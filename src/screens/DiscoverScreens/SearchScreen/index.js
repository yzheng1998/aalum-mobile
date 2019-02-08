import React, { Component } from 'react'
import { Screen } from './styles'
import SearchBar from './components/SearchBar'

export default class SearchScreen extends Component {
  render() {
    return (
      <Screen>
        <SearchBar />
      </Screen>
    )
  }
}

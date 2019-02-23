import React, { Component } from 'react'
import { Screen, SearchContainer } from './styles'
import { SearchBar } from './components/SearchBar'
import ScreenHeader from '../../../components/ScreenHeader'
import UserSearchCard from './components/UserSearchCard'
import { Query } from 'react-apollo'
import { GET_USERS } from './queries'
import LoadingWrapper from '../../../components/LoadingWrapper'

const DEFAULT_PIC_URL =
  'https://static.projects.iq.harvard.edu/files/styles/profile_full/public/atp/files/yuke_zheng.jpg?m=1531971036&itok=3oUmuyM0'

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Screen>
        <ScreenHeader
          navigation={this.props.navigation}
          title="Search"
          showBack
        />
        <SearchBar updateState={this.updateState} />
        <Query
          query={GET_USERS}
          variables={{
            substring: this.state.text
          }}
        >
          {({ loading, data }) => {
            if (loading) return <LoadingWrapper loading />
            const userData = data.users.nodes
            return (
              <SearchContainer>
                {userData.map(user => (
                  <UserSearchCard
                    key={user.id}
                    profilePicture={
                      user.photos && user.photos[0]
                        ? user.photos[0].imageUrl
                        : DEFAULT_PIC_URL
                    }
                    name={user.name}
                    age={user.age}
                    location={user.location}
                    school={
                      user.educations && user.educations[0]
                        ? user.educations[0].school
                        : 'null'
                    }
                    degree={
                      user.educations && user.educations[0]
                        ? user.educations[0].degree
                        : 'null'
                    }
                    year={
                      user.educations && user.educations[0]
                        ? user.educations[0].year
                        : 'null'
                    }
                    isInterested={user.isConnected}
                  />
                ))}
              </SearchContainer>
            )
          }}
        </Query>
      </Screen>
    )
  }
}

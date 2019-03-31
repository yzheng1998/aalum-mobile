import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Screen, SearchContainer, SearchHeader } from './styles'
import SearchBar from './components/SearchBar'
import ScreenHeader from '../../../components/ScreenHeader'
import UserSearchCard from './components/UserSearchCard'
import { Query } from 'react-apollo'
import { GET_USERS } from './queries'
import LoadingWrapper from '../../../components/LoadingWrapper'
import { degreeAbbrEnumToString } from '../../../../enumMappings'

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
        <SearchHeader>
          <ScreenHeader
            navigation={this.props.navigation}
            title="Search"
            showBack
          />
          <SearchBar updateState={this.updateState} />
        </SearchHeader>
        <Query
          query={GET_USERS}
          variables={{
            substring: this.state.text
          }}
          onError={error => {
            if (error) {
              Alert.alert('Encountered server error')
              this.props.navigation.goBack()
            }
          }}
        >
          {({ loading, data, refetch }) => {
            if (loading) return <LoadingWrapper loading />
            const userData = data ? data.users.nodes : []
            return (
              <SearchContainer>
                {userData.map(user => (
                  <UserSearchCard
                    id={user.id}
                    key={user.id}
                    profilePicture={user.profilePicture}
                    name={user.name}
                    age={user.age}
                    locationName={user.locationName}
                    school={
                      user.educations && user.educations[0]
                        ? user.educations[0].schoolName
                        : ''
                    }
                    degree={
                      user.educations && user.educations[0]
                        ? degreeAbbrEnumToString(user.educations[0].degreeType)
                        : ''
                    }
                    year={
                      user.educations && user.educations[0]
                        ? user.educations[0].year
                        : ''
                    }
                    swipedRight={
                      user.swipeStatus === 'SWIPE_RIGHT' ||
                      user.swipeStatus === 'MATCH'
                    }
                    navigation={this.props.navigation}
                    refetch={refetch}
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

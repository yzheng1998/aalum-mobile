import React, { Component } from 'react'
import { Screen, Container } from './styles'
import ScreenHeader from '../../../components/ScreenHeader'
import LoadingWrapper from '../../../components/LoadingWrapper'
import { Query } from 'react-apollo'
import { GET_USER_FILTERS } from './queries'
import FilterContainer from './components/FilterContainer'

export default class FilterScreen extends Component {
  render() {
    return (
      <Container>
        <Screen>
          <ScreenHeader
            navigation={this.props.navigation}
            title="Filter"
            showBack
          />
          <Query
            query={GET_USER_FILTERS}
            variables={{ id: '00f9008c-2a01-448e-8bc0-99d65ef07332' }}
          >
            {({ loading, data }) => {
              if (loading) return <LoadingWrapper loading />
              const {
                distance,
                ageMin,
                ageMax,
                heightMin,
                heightMax
              } = data.user.DiscoveryFilter
              return (
                <FilterContainer
                  distance={[distance]}
                  age={[ageMin, ageMax]}
                  height={[heightMin, heightMax]}
                />
              )
            }}
          </Query>
        </Screen>
      </Container>
    )
  }
}

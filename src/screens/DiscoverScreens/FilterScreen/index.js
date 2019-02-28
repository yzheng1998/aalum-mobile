import React, { Component } from 'react'
import { Container } from './styles'
import LoadingWrapper from '../../../components/LoadingWrapper'
import { Query } from 'react-apollo'
import { GET_USER_FILTERS } from './queries'
import FilterContainer from './components/FilterContainer'

export default class FilterScreen extends Component {
  render() {
    return (
      <Container>
        <Query
          query={GET_USER_FILTERS}
          variables={{ id: '001cbc88-c5d5-4caa-92ff-431d76a03976' }}
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
                navigation={this.props.navigation}
              />
            )
          }}
        </Query>
      </Container>
    )
  }
}

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
          variables={{ id: '4ac51abe-1cfb-4730-b399-b51cd0e13ff4' }}
        >
          {({ loading, data }) => {
            if (loading) return <LoadingWrapper loading />
            const {
              distance,
              ageMin,
              ageMax,
              heightMin,
              heightMax,
              ethnicities,
              languages,
              professions,
              genders,
              bodyTypes
            } = data.user.DiscoveryFilter
            return (
              <FilterContainer
                distance={[distance]}
                age={[ageMin, ageMax]}
                height={[heightMin, heightMax]}
                ethnicities={ethnicities}
                languages={languages}
                professions={professions}
                genders={genders}
                bodyTypes={bodyTypes}
                navigation={this.props.navigation}
              />
            )
          }}
        </Query>
      </Container>
    )
  }
}

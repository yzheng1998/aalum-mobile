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
          variables={{ id: '6b978731-e35d-42d4-8572-6254602ac9da' }}
        >
          {({ loading, data, refetch }) => {
            if (loading) return <LoadingWrapper loading />
            const {
              distance,
              ageMin,
              ageMax,
              heightMin,
              heightMax,
              ethnicities,
              educations,
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
                educations={educations}
                languages={languages}
                professions={professions}
                genders={genders}
                bodyTypes={bodyTypes}
                navigation={this.props.navigation}
                refetch={refetch}
              />
            )
          }}
        </Query>
      </Container>
    )
  }
}

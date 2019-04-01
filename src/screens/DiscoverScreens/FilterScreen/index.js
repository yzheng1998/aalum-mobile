import React from 'react'
import { Alert } from 'react-native'
import { Container } from './styles'
import LoadingWrapper from '../../../components/LoadingWrapper'
import { Query } from 'react-apollo'
import { GET_USER_FILTERS } from './queries'
import FilterContainer from './components/FilterContainer'

const FilterScreen = ({ navigation }) => {
  const discoveryRefetch = navigation.getParam('discoveryRefetch')
  return (
    <Container>
      <Query
        query={GET_USER_FILTERS}
        onError={error => {
          if (error) {
            Alert.alert('Encountered server error')
            navigation.goBack()
          }
        }}
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
          } = data ? data.viewer.DiscoveryFilter : {}
          const degreeTypes =
            educations && educations[0]
              ? educations.map(education => education.degreeType)
              : []
          return (
            <FilterContainer
              distance={distance ? [distance] : null}
              age={ageMin && ageMax ? [ageMin, ageMax] : null}
              height={heightMin && heightMax ? [heightMin, heightMax] : null}
              ethnicities={ethnicities}
              educations={degreeTypes}
              languages={languages}
              professions={professions}
              genders={genders}
              bodyTypes={bodyTypes}
              navigation={navigation}
              filterRefetch={refetch}
              discoveryRefetch={discoveryRefetch}
            />
          )
        }}
      </Query>
    </Container>
  )
}

export default FilterScreen

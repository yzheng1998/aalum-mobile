import gql from 'graphql-tag'

export const GET_USER_FILTERS = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      DiscoveryFilter {
        distance
        ageMin
        ageMax
        heightMin
        heightMax
        ethnicities
        languages
        professions
        genders
      }
    }
  }
`

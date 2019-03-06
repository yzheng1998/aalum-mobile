import gql from 'graphql-tag'

export const GET_USER_FILTERS = gql`
  query viewer {
    viewer {
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
        educations {
          degreeType
        }
        professions
        genders
        bodyTypes
      }
    }
  }
`

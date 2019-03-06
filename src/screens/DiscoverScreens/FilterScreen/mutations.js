import gql from 'graphql-tag'

export const APPLY_FILTERS = gql`
  mutation filter($input: DiscoveryFilterInput!) {
    filter(input: $input) {
      name
      DiscoveryFilter {
        distance
        ageMin
        ageMax
        heightMin
        heightMax
        genders
        languages
        educations {
          degreeType
        }
        ethnicities
        professions
        bodyTypes
      }
    }
  }
`

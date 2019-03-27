import gql from 'graphql-tag'

export const GET_DISCOVERY = gql`
  query discovery($offset: Int, $limit: Int) {
    discovery(offset: $offset, limit: $limit) {
      nodes {
        id
        name
        email
        profilePicture
        age
        distance
        educations {
          year
          degreeType
          schoolName
        }
      }
    }
  }
`

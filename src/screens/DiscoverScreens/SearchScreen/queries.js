import gql from 'graphql-tag'

export const GET_USERS = gql`
  query users($substring: String!) {
    users(substring: $substring) {
      nodes {
        id
        name
        email
        profilePicture
        age
        educations {
          class
          degree
          school
        }
      }
    }
  }
`

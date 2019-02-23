import gql from 'graphql-tag'

export const GET_USERS = gql`
  query user($substring: String!) {
    users(substring: $substring) {
      nodes {
        id
        name
        email
        photos {
          id
          imageUrl
          rank
        }
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

import gql from 'graphql-tag'

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
      }
      token
      error {
        message
      }
    }
  }
`

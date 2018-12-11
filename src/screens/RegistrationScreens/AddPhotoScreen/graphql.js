import gql from 'graphql-tag'

export const REGISTER_USER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      user {
        id
      }
      error {
        message
      }
      token
    }
  }
`

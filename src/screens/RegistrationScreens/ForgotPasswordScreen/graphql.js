import gql from 'graphql-tag'

export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      token
      code
      error {
        message
      }
    }
  }
`

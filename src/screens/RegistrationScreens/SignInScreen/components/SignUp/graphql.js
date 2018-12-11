import gql from 'graphql-tag'

export const VERIFY_EMAIL = gql`
  mutation sendVerificationCode($email: String!) {
    sendVerificationCode(email: $email) {
      code
      error {
        message
      }
    }
  }
`

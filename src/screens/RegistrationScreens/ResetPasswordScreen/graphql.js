import gql from 'graphql-tag'

export const RESET_PASSWORD = gql`
  mutation resetPassword($resetPasswordInput: ResetPasswordInput!) {
    resetPassword(resetPasswordInput: $resetPasswordInput) {
      success
      error {
        message
      }
    }
  }
`

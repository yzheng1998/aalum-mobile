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

export const SIGN_S3_URL = gql`
  mutation signS3Url($signS3UrlInput: SignS3UrlInput!) {
    signS3Url(signS3UrlInput: $signS3UrlInput) {
      url
      error {
        message
      }
    }
  }
`

import gql from 'graphql-tag'

export const UPDATE_LOCATION = gql`
  mutation updateLocation($coordinateInput: CoordinateInput!) {
    updateLocation(coordinateInput: $coordinateInput) {
      user {
        id
      }
      error {
        message
      }
    }
  }
`

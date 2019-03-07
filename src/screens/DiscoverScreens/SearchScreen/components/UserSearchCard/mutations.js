import gql from 'graphql-tag'

export const SEND_MATCH_RESPONSE = gql`
  mutation sendMatchResponse($recipient: ID!, $swipedRight: Boolean) {
    sendMatchResponse(recipient: $recipient, swipedRight: $swipedRight) {
      id
      success
      error {
        message
      }
    }
  }
`

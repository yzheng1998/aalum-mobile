import gql from 'graphql-tag'

export const REPORT_USER = gql`
  mutation reportUser($reportedUserId: ID!) {
    reportUser(reportedUserId: $reportedUserId) {
      id
      email
      name
      isConnected
    }
  }
`
export const UNMATCH_USER = gql`
  mutation sendMatchResponse($recipient: ID!, $swipedRight: Boolean) {
    sendMatchResponse(recipient: $recipient, swipedRight: $swipedRight) {
      success
      error {
        message
      }
    }
  }
`

export const BLOCK_USER = gql`
  mutation blockUser($blockedUserId: ID!) {
    blockUser(blockedUserId: $blockedUserId)
  }
`

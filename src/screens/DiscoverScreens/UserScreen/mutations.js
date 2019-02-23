import gql from 'graphql-tag'

export const REPORT_USER = gql`
  mutation reportUser($reportedUserId: ID!) {
    reportUser(reportedUserId: $reportedUserId) {
      email
      name
      isConnected
    }
  }
`

import React, { Component } from 'react'
import ActionSheet from 'react-native-actionsheet'
import { Alert } from 'react-native'
import { Mutation } from 'react-apollo'
import { REPORT_USER, UNMATCH_USER } from '../../mutations'

export default class ActionMenu extends Component {
  render() {
    const { id, setActionsheet } = this.props
    return (
      <Mutation
        mutation={REPORT_USER}
        onCompleted={reportData => {
          if (reportData.reportUser) {
            Alert.alert('User reported')
          }
        }}
        onError={error => {
          if (error) {
            Alert.alert('Encountered server error')
          }
        }}
      >
        {reportUser => (
          <Mutation
            mutation={UNMATCH_USER}
            onCompleted={unmatchData => {
              if (unmatchData.sendMatchResponse.success) {
                Alert.alert('You unmatched with this user')
              }
            }}
            onError={error => {
              if (error) {
                Alert.alert('Encountered server error')
              }
            }}
          >
            {unmatchUser => (
              <ActionSheet
                ref={setActionsheet}
                options={['Report', 'Unmatch', 'Cancel']}
                cancelButtonIndex={2}
                destructiveButtonIndex={1}
                onPress={index => {
                  if (index === 0) {
                    const variables = {
                      reportedUserId: id
                    }
                    reportUser({ variables })
                  } else if (index === 1) {
                    const variables = {
                      recipient: id,
                      swipedRight: false
                    }
                    unmatchUser({ variables })
                  }
                }}
              />
            )}
          </Mutation>
        )}
      </Mutation>
    )
  }
}

import React, { Component } from 'react'
import ActionSheet from 'react-native-actionsheet'
import { Alert } from 'react-native'
import { Mutation } from 'react-apollo'
import { REPORT_USER, BLOCK_USER } from '../../mutations'

export default class ActionMenuBlock extends Component {
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
            mutation={BLOCK_USER}
            onCompleted={blockResponse => {
              if (blockResponse) {
                Alert.alert('You blocked this user.')
              }
            }}
            onError={error => {
              if (error) {
                Alert.alert('Encountered server error. Please try again.')
              }
            }}
          >
            {blockUser => (
              <ActionSheet
                ref={setActionsheet}
                options={['Report', 'Block', 'Cancel']}
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
                      blockedUserId: id
                    }
                    blockUser({ variables })
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

import React, { Component } from 'react'
import ActionSheet from 'react-native-actionsheet'
import { Alert } from 'react-native'
import { Mutation } from 'react-apollo'
import { REPORT_USER, BLOCK_USER } from '../../mutations'

export default class ActionMenuBlock extends Component {
  render() {
    const { id, setActionsheet, searchRefetch, discoveryRefetch } = this.props
    return (
      <Mutation
        mutation={REPORT_USER}
        onCompleted={reportData => {
          if (reportData.reportUser.success) {
            Alert.alert('You reported this user.', '', [
              {
                text: 'OK',
                onPress: () => {
                  if (searchRefetch) searchRefetch()
                  if (discoveryRefetch) discoveryRefetch()
                  this.props.navigation.goBack()
                }
              }
            ])
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
              if (blockResponse.blockUser.success) {
                Alert.alert('You blocked this user.', '', [
                  {
                    text: 'OK',
                    onPress: () => {
                      if (searchRefetch) searchRefetch()
                      if (discoveryRefetch) discoveryRefetch()
                      this.props.navigation.goBack()
                    }
                  }
                ])
              }
            }}
            onError={error => {
              if (error) {
                Alert.alert('Encountered server error.')
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

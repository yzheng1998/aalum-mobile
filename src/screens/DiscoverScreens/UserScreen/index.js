import React, { Component } from 'react'
import ActionSheet from 'react-native-actionsheet'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import UserSummary from './components/UserSummary'
import UserDetails from './components/UserDetails'
import UserBio from './components/UserBio'
import MatchButtons from './components/MatchButtons'
import BackButton from '../../../components/BackButton'
import {
  Screen,
  Container,
  BackButtonContainer,
  OptionsButtonContainer
} from './styles'
import LoadingWrapper from '../../../components/LoadingWrapper'
import UserPictureCarousel from './components/UserPictureCarousel'
import FloatingButton from '../../../components/FloatingButton'
import Icon from '../../../components/Icon'
import theme from '../../../../theme'
import { inchesToString } from '../../../../unitConverters'
import { GET_USER } from './queries'
import { Query, Mutation } from 'react-apollo'
import { REPORT_USER } from './mutations'
import { Alert } from 'react-native'

const SAMPLE_TEXT =
  'People say I’m...out of this world--but I’m just a small-town Kansas boy looking for love.'

const DEFAULT_ID = '01890092-5243-4e00-bd56-b97753aef289'

export default class UserScreen extends Component {
  render() {
    const id = this.props.navigation.getParam('id')
    const isMatched = true
    return (
      <Query query={GET_USER} variables={{ id: id || DEFAULT_ID }}>
        {({ loading, data }) => {
          if (loading) return <LoadingWrapper loading />
          const {
            name,
            gender,
            photos,
            height,
            educations,
            ethnicity,
            languages,
            bodyType,
            interests,
            age,
            job,
            distance
          } = data.user
          return (
            <Container>
              <Screen>
                <UserPictureCarousel userPictures={photos || []} />
                <UserSummary
                  name={name}
                  age={age}
                  distance={distance}
                  school={educations ? educations[0].school : null}
                  degree={educations ? educations[0].degree : null}
                  year={educations ? educations[0].year : null}
                  profession={job}
                />
                <UserBio info={SAMPLE_TEXT} />
                <UserDetails
                  gender={gender || []}
                  ethnicity={ethnicity || []}
                  languages={languages || []}
                  height={inchesToString(height)}
                  bodyType={[bodyType]}
                  interests={interests || []}
                />
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
                    <ActionSheet
                      ref={o => {
                        this.ActionSheet = o
                      }}
                      options={['Report', 'Unmatch', 'Cancel']}
                      cancelButtonIndex={2}
                      destructiveButtonIndex={1}
                      onPress={index => {
                        const variables = {
                          reportedUserId: id
                        }
                        if (index === 0) {
                          reportUser({ variables })
                        }
                      }}
                    />
                  )}
                </Mutation>
              </Screen>
              <OptionsButtonContainer onPress={() => this.ActionSheet.show()}>
                <MaterialIcon name="dots-vertical" color="white" size={37} />
              </OptionsButtonContainer>
              <BackButtonContainer>
                <BackButton
                  navigation={this.props.navigation}
                  color={theme.colors.white}
                  onPress={() => this.props.navigation.goBack()}
                />
              </BackButtonContainer>
              {isMatched ? (
                <FloatingButton title="Message">
                  <Icon
                    name="mail"
                    style={{ fontSize: 27, marginRight: 15, color: 'white' }}
                  />
                </FloatingButton>
              ) : (
                <MatchButtons />
              )}
            </Container>
          )
        }}
      </Query>
    )
  }
}

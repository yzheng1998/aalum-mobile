import React, { Component } from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import UserSummary from './components/UserSummary'
import UserDetails from './components/UserDetails'
import UserBio from './components/UserBio'
import MatchButtons from './components/MatchButtons'
import BackButton from '../../../components/BackButton'
import ActionMenu from './components/ActionMenu'
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
import { Query } from 'react-apollo'

export default class UserScreen extends Component {
  constructor(props) {
    super(props)
    this.setActionsheet = this.setActionsheet.bind(this)
  }

  setActionsheet = input => {
    this.actionsheet = input
  }

  render() {
    const id = this.props.navigation.getParam('id')
    const isMatched = true
    return (
      <Query query={GET_USER} variables={{ id }}>
        {({ loading, data }) => {
          if (loading) return <LoadingWrapper loading />
          const {
            name,
            genders,
            ethnicities,
            height,
            educations,
            professions,
            languages,
            bodyType,
            interests,
            age,
            bio,
            distance,
            profilePicture,
            photos
          } = data.user
          const photoArr = photos.map(photo => photo.imageUrl)
          return (
            <Container>
              <Screen>
                <UserPictureCarousel
                  userPictures={
                    photos && photos[0] ? [profilePicture, ...photoArr] : []
                  }
                />
                <UserSummary
                  name={name}
                  age={age}
                  distance={distance || ''}
                  schoolName={
                    educations && educations[0] ? educations[0].schoolName : ''
                  }
                  degreeType={
                    educations && educations[0] ? educations[0].degreeType : ''
                  }
                  year={educations && educations[0] ? educations[0].year : ''}
                  professions={professions || []}
                />
                <UserBio info={bio} />
                <UserDetails
                  gender={genders || []}
                  ethnicity={ethnicities || []}
                  languages={languages || []}
                  height={inchesToString(height)}
                  bodyType={[bodyType]}
                  interests={interests || []}
                />
                <ActionMenu id={id} setActionsheet={this.setActionsheet} />
              </Screen>
              <OptionsButtonContainer onPress={() => this.actionsheet.show()}>
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

import React, { Component } from 'react'
import ActionSheet from 'react-native-actionsheet'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import UserSummary from './components/UserSummary'
import UserDetails from './components/UserDetails'
import UserBio from './components/UserBio'
import MatchButtons from './components/MatchButtons'
import BackButton from '../../../components/BackButton'
import { Screen, Container, BackButtonContainer, Button } from './styles'
import UserPictureCarousel from './components/UserPictureCarousel'
import FloatingButton from '../../../components/FloatingButton'
import Icon from '../../../components/Icon'
import theme from '../../../../theme'

const SAMPLE_TEXT =
  'People say I’m...out of this world--but I’m just a small-town Kansas boy looking for love.'

const userPictures = [
  'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/harley-quinn-drawing-jasmina-susak.jpg',
  'https://i.pinimg.com/originals/cb/e3/8c/cbe38cfd74bd94003988c9593076de2c.jpg',
  'https://legacycomics.com/wp-content/uploads/2017/12/dc-comics-harley-quinn-prisoner-version-sixth-scale-suicide-squad-feature-902949.jpg'
]
export default class UserScreen extends Component {
  render() {
    const isMatched = true
    return (
      <Container>
        <Screen>
          <Button onPress={() => this.ActionSheet.show()}>
            <MaterialIcon name="dots-vertical" color="white" size={37} />
          </Button>
          <UserPictureCarousel userPictures={userPictures} />
          <UserSummary
            name="Clark"
            age={37}
            distance={0.1}
            school="Harvard University"
            degree="BACHELORSART"
            year="2013"
            profession="ENGINEER"
          />
          <UserBio info={SAMPLE_TEXT} />
          <UserDetails
            gender={['MAN']}
            ethnicity={['CAUCASIAN']}
            languages={[
              'ENGLISH',
              'SPANISH',
              'CHINESE',
              'ENGLISH',
              'SPANISH',
              'CHINESE'
            ]}
            height={`6'11"`}
            bodyType={['ATHLETIC']}
            interests={[
              'GARDENING',
              'GARDENING',
              'GARDENING',
              'GARDENING',
              'GARDENING',
              'GARDENING',
              'GARDENING'
            ]}
          />
          <ActionSheet
            ref={o => {
              this.ActionSheet = o
            }}
            options={['Report', 'Unmatch', 'Cancel']}
            cancelButtonIndex={2}
            destructiveButtonIndex={1}
            onPress={() => {}}
          />
        </Screen>
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
  }
}

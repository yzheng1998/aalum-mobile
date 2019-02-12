import React, { Component } from 'react'
import UserSummary from './components/UserSummary'
import UserDetails from './components/UserDetails'
import UserBio from './components/UserBio'
import MatchButton from '../../../components/MatchButton'
import { Screen, ButtonContainer } from './styles'
import UserPictureCarousel from './components/UserPictureCarousel'
import PrimaryButton from '../../../components/PrimaryButton'

const SAMPLE_TEXT =
  'People say I’m...out of this world--but I’m just a small-town Kansas boy looking for love.'

const userPictures = [
  'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/harley-quinn-drawing-jasmina-susak.jpg',
  'https://i.pinimg.com/originals/cb/e3/8c/cbe38cfd74bd94003988c9593076de2c.jpg',
  'https://legacycomics.com/wp-content/uploads/2017/12/dc-comics-harley-quinn-prisoner-version-sixth-scale-suicide-squad-feature-902949.jpg'
]
export default class UserScreen extends Component {
  render() {
    return (
      <Screen>
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
        <ButtonContainer>
          <MatchButton name="close" />
          <MatchButton name="heart" />
        </ButtonContainer>
        <PrimaryButton title="Message" />
      </Screen>
    )
  }
}

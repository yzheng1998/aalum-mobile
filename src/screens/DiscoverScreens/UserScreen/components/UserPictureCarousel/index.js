import React from 'react'
import { Container, Frame, Picture } from './styles'
import Swiper from 'react-native-swiper'
import theme from '../../../../../../theme'

const UserPictureCarousel = ({ userPictures }) => (
  <Container>
    <Swiper
      activeDotColor={theme.colors.white}
      dotColor={theme.colors.darkerGrey}
    >
      {userPictures.map((imageUrl, i) => (
        <Frame key={i}>
          <Picture
            source={{
              uri: imageUrl
            }}
          />
        </Frame>
      ))}
    </Swiper>
  </Container>
)

export default UserPictureCarousel

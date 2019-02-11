import React from 'react'
import { HeaderContainer, HeaderText, ButtonContainer } from './styles'
import BackButton from '../BackButton'
import theme from '../../../theme'

const ScreenHeader = ({ navigation, title, showBack, children }) => (
  <HeaderContainer>
    {showBack && (
      <BackButton
        onPress={() => navigation.goBack()}
        color={theme.colors.pureBlack}
        style={{ marginRight: 10 }}
      />
    )}
    <HeaderText>{title}</HeaderText>
    <ButtonContainer>{children}</ButtonContainer>
  </HeaderContainer>
)

export default ScreenHeader

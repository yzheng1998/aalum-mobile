import React from 'react'
import { SafeAreaView, Screen, Image, BackButtonContainer } from './styles'
import BackButton from '../BackButton'
import { StatusBar } from 'react-native'
import { Title } from '../Title'
import { Subtitle } from '../Subtitle'
import ProgressBar from '../ProgressBar'
import theme from '../../../theme'

const RegistrationScreen = ({
  showBack,
  children,
  title,
  subtitle,
  navigation,
  source,
  imageStyle,
  progress,
  scrollEnabled,
  as,
  ...rest
}) => (
  <SafeAreaView {...rest}>
    <Screen
      keyboardShouldPersistTaps="handled"
      scrollEnabled={scrollEnabled || false}
      alwaysBounceVertical={false}
      as={as}
    >
      <StatusBar hidden />
      {progress && <ProgressBar progress={progress} />}
      {showBack && (
        <BackButtonContainer>
          <BackButton
            color={theme.colors.inactiveText}
            onPress={() => navigation.goBack()}
          />
        </BackButtonContainer>
      )}
      <Image source={source} style={imageStyle} />
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Screen>
  </SafeAreaView>
)

export default RegistrationScreen

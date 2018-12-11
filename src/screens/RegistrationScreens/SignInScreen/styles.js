import styled from 'styled-components'
import theme from '../../../../theme'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const TabContainer = styled.View`
  flex: 1;
`

export const GreyBar = styled.View`
  width: 245px;
  height: 3px;
  position: absolute;
  align-self: center;
  top: 77px;
  z-index: -1;
  background-color: ${theme.colors.grey};
`

export const labelStyle = {
  color: theme.colors.gradientLeft,
  fontFamily: theme.fonts.title,
  fontSize: 16,
  marginBottom: 4
}

export const tabBarStyle = {
  marginRight: 64,
  marginLeft: 64,
  backgroundColor: 'transparent'
}

export const indicatorStyle = {
  backgroundColor: theme.colors.gradientLeft,
  height: 3
}

export const tabStyle = { width: 123 }

export const tabViewStyle = {
  backgroundColor: 'transparent',
  marginTop: 30
}

export const imageStyle = {
  alignSelf: 'center',
  width: height * 0.22,
  height: height * 0.077,
  marginTop: height * 0.08
}

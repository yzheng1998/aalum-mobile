import styled from 'styled-components'
import theme from '../../../theme'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const InnerContainer = styled.View`
  width: 100%;
  margin-bottom: ${height * 0.049};
`
export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export const Button = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 32px;
  margin-right: 32px;
  height: 60px;
  box-shadow: 0px 6px 25px ${theme.colors.shadow};
`

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.white};
  font-size: 20px;
`

export const innerGradientStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: 30
}

export const outerGradientStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
}

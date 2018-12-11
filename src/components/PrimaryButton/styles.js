import styled from 'styled-components'
import theme from '../../../theme'

export const Button = styled.TouchableOpacity`
  justify-content: center;
  height: 60px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 30px;
`

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.white};
  font-size: 20px;
`

export const gradientStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: 30
}

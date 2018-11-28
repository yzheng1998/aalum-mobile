import styled from 'styled-components'
import theme from '../../../theme'

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;  
  height: 60px;
  margin-left: 32px;
  margin-right: 32px;
  border-radius: 30px;
  background-color: ${theme.colors.gradientRight};
`

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.white};
  font-size: 20px;
`

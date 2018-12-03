import styled from 'styled-components'
import theme from '../../../theme'

export const Button = styled.TouchableOpacity`
  align-self: center;
`

export const Text = styled.Text`
  color: ${theme.colors.darkGrey};
  font-family: ${theme.fonts.title};
  font-size: 16px;
  line-height: 22px;
`

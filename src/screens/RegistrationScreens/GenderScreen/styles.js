import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Message = styled.Text`
  margin-left: 30px;
  color: ${props =>
    props.disabled ? themeGet('colors.black') : themeGet('colors.offWhite')};
  font-family: ${themeGet('fonts.title')};
  font-size: 13px;
`

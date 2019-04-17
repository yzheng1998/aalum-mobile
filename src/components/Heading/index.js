import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Heading = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.heading')};
  color: ${themeGet('colors.charcoal')};
`

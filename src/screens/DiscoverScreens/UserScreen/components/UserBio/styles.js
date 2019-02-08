import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  flex: 1;
  padding-left: 16px;
`
export const Bio = styled.Text`
  margin-top: 623px;
  font-size: 14px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.pureBlack')};
`

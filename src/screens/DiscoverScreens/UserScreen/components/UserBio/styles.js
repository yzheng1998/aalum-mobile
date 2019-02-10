import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  padding-left: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top-width: 1px;
  border-top-color: ${themeGet('colors.whiteGrey')};
`
export const Bio = styled.Text`
  font-size: 14px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.pureBlack')};
`

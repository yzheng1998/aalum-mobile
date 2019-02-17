import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const TitleText = styled.Text`
  font-size: 15px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.pureBlack')};
`
export const DetailsText = styled.Text`
  font-size: 15px;
  flex-shrink: 1;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.darkerGrey')};
  margin-left: 7px;
`

export const RowContainer = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`

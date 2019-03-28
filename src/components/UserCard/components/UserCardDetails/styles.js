import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  margin-left: 13px;
  flex-flow: column nowrap;
`
export const NameText = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.pureBlack')};
`

export const LocationText = styled.Text`
  font-size: 11px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.charcoal')};
`

export const EducationText = styled.Text`
  font-size: 11px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.darkerGrey')};
`

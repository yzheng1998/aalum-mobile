import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  margin-top: -45px;
  margin-left: 25px;
  margin-right: 25px;
  padding-left: 15px;
  box-shadow: 0px 6px 25px ${themeGet('colors.shadow')};
  background-color: white;
`

export const Title = styled.Text`
  margin-top: 10px;
  font-family: ${themeGet('fonts.title')};
  font-size: 20px;
  color: ${themeGet('colors.pureBlack')};
`

export const DistanceText = styled.Text`
  font-family: ${themeGet('fonts.bodyText')};
  font-size: 14px;
  color: ${themeGet('colors.green')};
`
export const EducationTitle = styled.Text`
  margin-bottom: 12px;
  font-family: ${themeGet('fonts.bodyText')};
  font-size: 14px;
  color: ${themeGet('colors.mediumGrey')};
`

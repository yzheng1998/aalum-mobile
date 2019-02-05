import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  margin-left: 50px;
  margin-right: 50px;
  box-shadow: 0px 6px 25px ${themeGet('colors.shadow')};
  background-color: white;
  padding-left: 15px;
  margin-top: -45px;
`

export const Title = styled.Text`
  font-family: ${themeGet('fonts.title')};
  font-size: 20px;
  margin-top: 10px;
  color: ${themeGet('colors.pureBlack')};
`

export const DistanceText = styled.Text`
  font-family: ${themeGet('fonts.bodyText')};
  font-size: 14px;
  color: ${themeGet('colors.green')};
`
export const EducationTitle = styled.Text`
  font-family: ${themeGet('fonts.bodyText')};
  font-size: 14px;
  margin-bottom: 12px;
  color: ${themeGet('colors.mediumGrey')};
`

import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  margin-left: 20px;
  margin-top: 41px;
  margin-right: 20px;
`

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.heading')};
  color: ${themeGet('colors.charcoal')};
`

export const CurrentValueText = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.title')};
  color: ${themeGet('colors.charcoal')};
`

export const BoundaryText = styled.Text`
  font-size: 14px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.darkGrey')};
`

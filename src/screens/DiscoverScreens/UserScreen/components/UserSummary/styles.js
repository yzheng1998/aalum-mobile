import styled from 'styled-components'
import Icon from '../../../../../components/Icon'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  margin-top: 11px;
  margin-left: 15px;
  margin-bottom: 15px;
`

export const NameText = styled.Text`
  font-size: 26px;
  font-family: ${themeGet('fonts.title')};
  color: ${themeGet('colors.pureBlack')};
`
export const RowContainer = styled.View`
  flex-direction: row;
`

export const DetailsText = styled.Text`
  margin-left: 9.77px;
  font-size: 15px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.darkerGrey')};
`

export const Icn = styled(Icon)`
  color: ${themeGet('colors.darkerGrey')};
  font-size: 15px;
  margin-top: 2.5px;
  width: 16px;
  text-align: center;
`

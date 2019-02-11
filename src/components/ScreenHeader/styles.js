import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const HeaderContainer = styled.View`
  padding-left: 25px;
  padding-right: 25px;
  flex-direction: row;
  align-items: center;
`

export const HeaderText = styled.Text`
  font-family: ${themeGet('fonts.title')};
  font-size: 32px;
  margin-left: 5px;
`

export const ButtonContainer = styled.View`
  flex-grow: 1;
  padding-right: 5px;
  align-items: flex-end;
`

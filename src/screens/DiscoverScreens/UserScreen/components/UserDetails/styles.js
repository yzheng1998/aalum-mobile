import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  width: 100px;
  height: 100px;
  border-top-width: 1px;
  border-top-color: ${themeGet('colors.whiteGrey')};
  width: 100%;
`

export const DetailsContainer = styled.View`
  margin-top: 15px;
  margin-left: 18px;
  margin-right: 18px;
`

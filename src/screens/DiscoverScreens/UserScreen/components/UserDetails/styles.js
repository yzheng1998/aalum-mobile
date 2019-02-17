import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  border-top-width: 1px;
  border-top-color: ${themeGet('colors.whiteGrey')};
`

export const DetailsContainer = styled.View`
  margin-top: 15px;
  margin-left: 18px;
  margin-right: 18px;
`

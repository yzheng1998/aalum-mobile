import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  flex: 1;
  margin-left: 16px;
  margin-right: 23px;
  margin-top: 41px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.heading')};
  color: ${themeGet('colors.charcoal')};
  margin-bottom: 15px;
`

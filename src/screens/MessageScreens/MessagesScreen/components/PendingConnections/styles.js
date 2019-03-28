import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  margin-top: 35px;
`
export const Title = styled.Text`
  font-size: 17px;
  font-family: ${themeGet('fonts.heading')};
`

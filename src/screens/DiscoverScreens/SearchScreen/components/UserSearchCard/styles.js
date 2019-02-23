import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.TouchableOpacity`
  justify-content: center;
  height: 80px;
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${themeGet('colors.whiteGrey')};
`

export const ContentContainer = styled.View`
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  margin-bottom: 13px;
`
export const HeartContainer = styled.View`
  flex-flow: row;
  flex: 1;
  justify-content: flex-end;
`

import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 37px;
  padding-left: 15px;
  height: 50px;
  background-color: white;
  box-shadow: 0px 6px 25px ${themeGet('colors.shadow')};
`

export const Title = styled.Text`
  margin-left: 15px;
  font-size: 16px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.inactiveText')};
`

export const Button = styled.TouchableOpacity`
  margin-top: 19px;
`

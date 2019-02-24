import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${height * 0.0233};
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: ${height * 0.045};
  padding-left: 15px;
  height: ${height * 0.061};
  background-color: white;
  box-shadow: 0px 6px 25px ${themeGet('colors.shadow')};
`

export const Input = styled.TextInput`
  margin-left: 15px;
  font-size: 16px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.charcoal')};
`

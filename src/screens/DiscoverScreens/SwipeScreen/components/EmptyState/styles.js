import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Container = styled.View`
  justify-content: center;
  height: ${height * 0.44};
  width: 87%;
`
export const Message = styled.Text`
  color: ${themeGet('colors.darkerGrey')};
  margin: 10px;
  text-align: center;
  font-family: ${themeGet('fonts.title')};
  font-size: 24px;
`

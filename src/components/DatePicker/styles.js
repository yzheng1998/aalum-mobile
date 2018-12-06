import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const DoneButton = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet('colors.white')};
`

export const DoneButtonText = styled.Text`
  font-size: 16px;
  color: ${themeGet('colors.charcoal')};
  font-family: ${themeGet('fonts.bodyText')};
`

export const Container = styled.View`
  background-color: ${themeGet('colors.white')};
  position: absolute;
  align-self: center;
  bottom: 0;
  width: 100%;
`

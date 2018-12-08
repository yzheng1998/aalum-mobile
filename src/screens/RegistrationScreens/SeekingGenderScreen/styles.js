import styled from 'styled-components'
import theme from '../../../../theme'

export const ToggleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`

export const Toggle = styled.Switch`
  margin-left: 20px;
`

export const ToggleText = styled.Text`
  font-size: 20px;
  line-height: 21px;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.bodyText};
  margin-left: 18px;
  margin-top: 6px;
`

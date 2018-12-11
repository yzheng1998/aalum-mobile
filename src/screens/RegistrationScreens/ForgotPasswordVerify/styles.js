import styled from 'styled-components'
import theme from '../../../../theme'

export const Screen = styled.SafeAreaView`
  flex: 1;
`
export const InputContainer = styled.View`
  height: 60px;
`
export const CodeText = styled.Text`
  width: 138px;
  height: 25px;
  margin-left: 114px;
  font-family: ${theme.fonts.bodyText};
  font-size: 18px;
  text-align: center;
  color: ${theme.colors.charcoal};
`

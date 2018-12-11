import styled from 'styled-components'
import theme from '../../../../theme'

export const Screen = styled.SafeAreaView`
  flex: 1;
`
export const InputContainer = styled.View`
  height: 60px;
`
export const CodeText = styled.Text`
  line-height: 25px;
  align-self: center;
  font-family: ${theme.fonts.bodyText};
  font-size: 18px;
  color: ${theme.colors.charcoal};
`

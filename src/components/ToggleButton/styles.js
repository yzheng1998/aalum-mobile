import styled from 'styled-components'
import theme from '../../../theme'

export const Button = styled.TouchableOpacity`
  border: 3px solid
    ${props =>
      props.isSelected ? theme.colors.gradientLeft : theme.colors.grey};
  border-radius: 15px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.title};
  color: ${props =>
    props.isSelected ? theme.colors.gradientLeft : theme.colors.grey};
  font-size: 18px;
  align-self: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 11px;
  margin-bottom: 11px;
`

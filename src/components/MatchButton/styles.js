import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Icon from '../Icon'

export const Container = styled.TouchableOpacity`
  width: 61px;
  height: 61px;
  border-radius: 30.5px;
  justify-content: center;
  box-shadow: 0px 6px 25px ${themeGet('colors.shadow')};
  background-color: white;
`
export const CloseIcon = styled(Icon)`
  font-size: 50px;
  color: ${themeGet('colors.pureBlack')};
  margin-left: 20.7px;
  margin-top: 4.5px;
`

export const HeartIcon = styled(Icon)`
  font-size: 30px;
  color: ${themeGet('colors.gradientLeft')};
  margin-left: 18px;
  margin-top: 5px;
`

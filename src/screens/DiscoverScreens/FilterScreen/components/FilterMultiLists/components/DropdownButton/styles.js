import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Icon from '../../../../../../../components/Icon'

export const Container = styled.View`
  margin-top: 10px;
`

export const DropdownView = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50;
  margin-bottom: 10;
  border-width: 3;
  border-radius: 5;
  border-color: ${themeGet('colors.border')};
`
export const SubSection = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 19;
  padding-right: 18;
  padding-top: 10;
  padding-bottom: 10;
`

export const ContentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const ContentText = styled.Text`
  flex: 1;
  font-size: 18;
  color: ${themeGet('colors.inactiveText')};
  font-family: ${themeGet('fonts.title')};
`

export const Arrow = styled(Icon)`
  font-size: 30;
  color: ${themeGet('colors.darkerGrey')};
`
export const Touchable = styled.TouchableWithoutFeedback``

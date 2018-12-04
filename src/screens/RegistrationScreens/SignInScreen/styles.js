import styled from 'styled-components'
import theme from '../../../../theme'

export const TabContainer = styled.View`
  flex: 1;
`

export const GreyBar = styled.View`
  width: 245px;
  height: 3px;
  position: absolute;
  align-self: center;
  top: 77px;
  z-index: -1;
  background-color: ${theme.colors.grey};
`

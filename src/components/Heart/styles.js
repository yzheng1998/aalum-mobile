import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Icon from '../Icon'

export const Icn = styled(Icon)`
  color: ${props =>
    props.active
      ? themeGet('colors.gradientLeft')
      : themeGet('colors.lightGrey')};
  font-size: 32px;
`

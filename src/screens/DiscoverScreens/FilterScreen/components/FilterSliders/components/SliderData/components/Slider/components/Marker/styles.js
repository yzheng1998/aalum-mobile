import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
  border: 2px solid ${themeGet('colors.white')};
  box-shadow: 0px 3px 1px ${themeGet('colors.darkShadow')};
`

export const OuterShadow = styled.View`
  box-shadow: 0px 3px 8px ${themeGet('colors.shadow')};
`

export const MiddleShadow = styled.View`
  box-shadow: 0px 1px 1px ${themeGet('colors.lightShadow')};
`

export const gradientStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  height: 25,
  width: 25,
  borderRadius: 50
}

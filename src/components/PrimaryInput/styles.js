import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const MainContainer = styled.View`
  margin-left: 32px;
  margin-right: 32px;
`

export const Title = styled.Text`
  margin-left: 16px;
  margin-bottom: 10px;
  font-family: ${themeGet('fonts.title')};
  color: ${({ error }) =>
    error ? themeGet('colors.error') : themeGet('colors.charcoal')};
  font-size: 16px;
  line-height: 19px;
`

export const InputField = styled.TextInput`
  width: ${({ icon }) => (icon ? '90%' : '100%')};
  line-height: 16px;
  font-size: 14px;
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.charcoal')};
`

export const FullView = styled.View`
  border-width: ${({ error }) => (error ? '2px' : '1.5px')};
  height: 45px;
  border-radius: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 16px;
  border-color: ${({ error }) =>
    error ? themeGet('colors.error') : themeGet('colors.grey')};
  background-color: ${themeGet('colors.white')};
`

export const Icon = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5px;
`

export const ErrorMessage = styled.Text`
  margin-top: 10px;
  margin-left: 16px;
  color: ${themeGet('colors.error')};
  font-family: ${themeGet('fonts.title')};
  font-size: 13px;
  line-height: 15px;
`

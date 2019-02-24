import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Screen = styled.View`
  flex: 1;
  padding-top: ${height * 0.07};
`

export const SearchHeader = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${themeGet('colors.whiteGrey')};
`

export const SearchContainer = styled.ScrollView``

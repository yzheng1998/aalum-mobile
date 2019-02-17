import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Screen = styled.View`
  flex: 1;
  padding-top: ${height * 0.065};
`

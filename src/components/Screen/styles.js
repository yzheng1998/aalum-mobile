import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Wrapper = styled.View`
  flex: 1;
  padding-top: ${height * 0.065};
  background-color: ${({ background }) => background || 'white'};
`

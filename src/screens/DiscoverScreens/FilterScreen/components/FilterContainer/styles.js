import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
`

export const Screen = styled.ScrollView`
  flex: 1;
  padding-top: ${height * 0.07};
`

export const Padding = styled.View`
  height: 185px;
`

export const FloatingContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

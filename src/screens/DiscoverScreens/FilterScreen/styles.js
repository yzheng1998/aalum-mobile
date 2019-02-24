import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Screen = styled.ScrollView`
  flex: 1;
  padding-top: ${height * 0.07};
`

export const Container = styled.View`
  flex: 1;
`

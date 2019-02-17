import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Container = styled.View`
  height: ${height * 0.465};
`

export const Frame = styled.View`
  flex: 1;
`

export const Title = styled.Text``

export const Picture = styled.Image`
  width: 100%;
  height: 100%;
`

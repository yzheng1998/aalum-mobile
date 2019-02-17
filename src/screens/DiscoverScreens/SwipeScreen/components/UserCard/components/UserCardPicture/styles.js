import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Container = styled.View`
  justify-content: center;
  height: ${height * 0.44};
  border-radius: 10px;
  overflow: hidden;
`

export const Picture = styled.Image`
  width: 100%;
  height: 100%;
`

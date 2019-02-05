import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
export const Container = styled.View`
  justify-content: center;
  height: ${height * 0.465};
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 10px;
  overflow: hidden;
`

export const LargeContainer = styled.View``

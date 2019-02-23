import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Screen = styled.View`
  padding-top: ${height * 0.065};
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${height * 0.0373};
  padding-bottom: ${height * 0.064};
`

export const Container = styled.View`
  height: ${height * 0.44 + 45};
`

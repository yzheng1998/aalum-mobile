import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Container = styled.View`
  height: ${height * 0.44 + 45};
`

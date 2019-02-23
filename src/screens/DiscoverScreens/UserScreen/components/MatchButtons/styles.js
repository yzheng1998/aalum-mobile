import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const InnerContainer = styled.View`
  width: 100%;
  margin-bottom: ${height * 0.049};
`
export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${height * 0.05};
`
export const gradientStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
}

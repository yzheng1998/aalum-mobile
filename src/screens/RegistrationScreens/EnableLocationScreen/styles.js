import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Image = styled.Image``

export const imageStyle = {
  alignSelf: 'center',
  width: height * 0.41,
  height: height * 0.3,
  marginTop: height * 0.14
}

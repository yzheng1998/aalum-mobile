import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export const Screen = styled.ScrollView`
  padding-top: 0px;
`

export const Container = styled.View`
  flex: 1;
`
export const BackButtonContainer = styled.View`
  position: absolute;
  top: ${height * 0.062};
  left: ${height * 0.0369};
`

export const OptionsButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${height * 0.062};
  right: 10px;
`

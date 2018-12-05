import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const PhotoUploader = styled.TouchableOpacity`
  margin-left: 50px;
  margin-right: 50px;
  border: ${({ border }) => (border ? '0px solid #FFF' : '3px dashed #bdbdbd')};
  background-color: #ededed;
  position: relative;
  border-radius: 10px;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
`

export const MainPhoto = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

export const PlusSign = styled.View`
  background-color: ${({ color }) =>
    color ? themeGet('colors.grey') : themeGet('colors.gradientLeft')};
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  position: absolute;
`

export const PlusSignWrapper = styled.View`
  background-color: white;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -20;
  top: -20;
`

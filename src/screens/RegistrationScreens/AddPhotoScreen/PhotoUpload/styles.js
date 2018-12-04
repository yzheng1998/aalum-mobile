import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const PhotoUploader = styled.TouchableOpacity`
  margin-left: 50px;
  margin-right: 50px;
  border: 3px dashed #bdbdbd;
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

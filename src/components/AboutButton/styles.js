import styled from 'styled-components'

export const Wrapper = styled.TouchableOpacity`
  align-self: center;
  display: flex;
  justify-content: center;
  width: 348px;
  height: 53px;
  border: 1px solid ${({ borderColor }) => borderColor || '#e0e0e0'};
  border-radius: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.title};
  align-self: center;
  color: ${({ color }) => color || 'black'};
`

export const gradientStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: 30
}

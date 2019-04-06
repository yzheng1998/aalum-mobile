import styled from 'styled-components'

export const ActiveButton = styled.TouchableOpacity`
  width: 85px;
  height: 45px;
  border-radius: 40px;
  background-color: #da2752;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
`
export const InactiveButton = styled.TouchableOpacity`
  width: 85px;
  height: 45px;
  border-radius: 40px;
  border: 2px solid #bdbdbd;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: ${({ active }) => (active ? '#da2752' : 'grey')};
  font-size: 14px;
  margin-top: 11px;
  font-family: ${({ theme }) => theme.fonts.title};
`
export const Icon = styled.Image`
  align-self: center;
`

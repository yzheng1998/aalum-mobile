import styled from 'styled-components'

export const Container = styled.View`
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 17px;
`

export const ButtonGroupContainer = styled.View`
  justify-content: ${props => (props.isFilter ? 'flex-start' : 'center')};
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 12px;
  margin-top: 15px;
`

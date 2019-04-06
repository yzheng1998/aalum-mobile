import React from 'react'
import {
  InactiveButton,
  ActiveButton,
  Wrapper,
  ButtonText,
  Icon
} from './styles'

const ConnectionTabButton = ({ icon, text, active }) => (
  <Wrapper>
    {active ? (
      <ActiveButton>
        <Icon source={icon} />
      </ActiveButton>
    ) : (
      <InactiveButton>
        <Icon source={icon} />
      </InactiveButton>
    )}
    <ButtonText active={active}>{text}</ButtonText>
  </Wrapper>
)

export default ConnectionTabButton

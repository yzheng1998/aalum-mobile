import React from 'react'
import {
  Container,
  ContentText,
  Arrow,
  DropdownView,
  SubSection,
  Touchable,
  ContentContainer
} from './styles'

const DropdownButton = ({ onPress, children }) => (
  <Container>
    <DropdownView>
      <SubSection>
        <Touchable onPress={onPress}>
          <ContentContainer>
            <ContentText numberOfLines={1}>{children}</ContentText>
            <Arrow name="arrow-down" />
          </ContentContainer>
        </Touchable>
      </SubSection>
    </DropdownView>
  </Container>
)

export default DropdownButton

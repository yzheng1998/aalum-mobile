import React from 'react'
import { RowContainer, TitleText, DetailsText } from './styles'

const UserDetailsRow = ({ title, content }) => (
  <RowContainer>
    <TitleText>{`${title}:`}</TitleText>
    <DetailsText>{content}</DetailsText>
  </RowContainer>
)

export default UserDetailsRow

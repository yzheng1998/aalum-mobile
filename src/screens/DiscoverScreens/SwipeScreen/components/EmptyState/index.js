import React from 'react'
import { Container, Message } from './styles'

const EmptyState = () => (
  <Container>
    <Message>We couldn&#39;t find more potential matches :(</Message>
    <Message>Try updating your filters for more results!</Message>
  </Container>
)
export default EmptyState

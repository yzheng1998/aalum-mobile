import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, CenteredContainer } from './styles'

const LoadingWrapper = ({ children, loading, style }) => (
  <Container>
    {loading ? (
      <CenteredContainer>
        <ActivityIndicator />
      </CenteredContainer>
    ) : (
      <Container style={style}>{children}</Container>
    )}
  </Container>
)

export default LoadingWrapper

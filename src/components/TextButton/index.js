import React from 'react'
import { Button, Text } from './styles'

const TextButton = ({ text, ...rest }) => (
  <Button {...rest}>
    <Text>{text}</Text>
  </Button>
)

export default TextButton

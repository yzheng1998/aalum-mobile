import React from 'react'
import { Icn } from './styles'

const Heart = ({ active }) => (
  <Icn active={active} name={active ? 'heart' : 'heart-empty'} />
)

export default Heart

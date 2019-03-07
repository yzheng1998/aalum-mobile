import React from 'react'
import { Subtitle } from '../../src/components/Subtitle'
import mountWithTheme from '../helpers/theme'

describe('Subtitle', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<Subtitle>Title!</Subtitle>)
    expect(wrapper).toMatchSnapshot()
  })
})

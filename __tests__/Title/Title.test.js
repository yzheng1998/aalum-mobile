import React from 'react'
import { Title } from '../../src/components/Title'
import mountWithTheme from '../helpers/theme'

describe('Title', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<Title>Title!</Title>)
    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import Heart from '../../src/components/Heart'
import mountWithTheme from '../helpers/theme'

describe('Heart', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<Heart active />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ active: false })
    expect(wrapper).toMatchSnapshot()
  })
})

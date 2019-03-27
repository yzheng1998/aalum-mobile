import React from 'react'
import ProgressBar from '../../src/components/ProgressBar'
import mountWithTheme from '../helpers/theme'

describe('ProgressBar', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<ProgressBar />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ progress: 0.89 })
    expect(wrapper).toMatchSnapshot()
  })
})

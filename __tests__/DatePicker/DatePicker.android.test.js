import React from 'react'
import DatePicker from '../../src/components/DatePicker/DatePicker.android'
import { mount } from 'enzyme'

describe('DatePicker Anrdoid', () => {
  test('renders correctly', () => {
    const wrapper = mount(<DatePicker />)
    expect(wrapper).toMatchSnapshot()

    const mockDate = new Date('01/01/1996')
    wrapper.setProps({ date: mockDate })
    expect(wrapper).toMatchSnapshot()
  })
})

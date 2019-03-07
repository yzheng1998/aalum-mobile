import React from 'react'
import PasswordInput from '../../src/components/PasswordInput'
import mountWithTheme from '../helpers/theme'

describe('PasswordInput', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<PasswordInput />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({
      error: 'error',
      returnKeyType: 'done',
      placeholder: 'placeholder',
      autoFocus: true
    })
    expect(wrapper).toMatchSnapshot()

    wrapper.setState({ secure: false })
    expect(wrapper).toMatchSnapshot()
  })

  //   test('handles secure toggle correctly', () => {
  //     const wrapper = mountWithTheme(<PasswordInput />)
  //     expect(wrapper).toMatchSnapshot()
  //     const button = wrapper.find('ForwardRef')
  //     expect(button.length).toBe(1)
  //     button.simulate('press')
  //     expect(wrapper).toMatchSnapshot()
  //     expect(wrapper.state('secure')).toBe(false)
  //   })
})

import React from 'react'
import TextButton from '../../src/components/TextButton'
import { shallow } from 'enzyme'
import mountWithTheme from '../helpers/theme'

describe('TextButton', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<TextButton />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ text: 'text' })
    expect(wrapper).toMatchSnapshot()
  })

  test('handles onPress correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<TextButton onPress={onPressMock} />)
    const button = wrapper.find('Button')
    button.simulate('press')

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  test('handles disabled correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<TextButton onPress={onPressMock} disabled />)
    const button = wrapper.find('Button')

    expect(button.props().disabled).toBe(true)

    if (!button.props().disabled) {
      button.simulate('press')
    }
    expect(onPressMock).toHaveBeenCalledTimes(0)
  })
})

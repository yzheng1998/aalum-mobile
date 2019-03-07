import React from 'react'
import MatchButton from '../../src/components/MatchButton'
import { shallow } from 'enzyme'
import mountWithTheme from '../helpers/theme'

describe('MatchButton', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<MatchButton name="heart" />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ name: 'close', disabled: true })
    expect(wrapper).toMatchSnapshot()
  })

  test('handles onPress correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<MatchButton onPress={onPressMock} />)
    const button = wrapper.find('Button')
    button.simulate('press')

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  test('handles disabled correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<MatchButton onPress={onPressMock} disabled />)
    const button = wrapper.find('Button')

    expect(button.props().disabled).toBe(true)

    if (!button.props().disabled) {
      button.simulate('press')
    }
    expect(onPressMock).toHaveBeenCalledTimes(0)
  })
})

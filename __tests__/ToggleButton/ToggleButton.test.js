import React from 'react'
import ToggleButton from '../../src/components/ToggleButton'
import { shallow } from 'enzyme'
import mountWithTheme from '../helpers/theme'

describe('ToggleButton', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<ToggleButton />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ title: 'title', isSelected: true, disabled: true })
    expect(wrapper).toMatchSnapshot()
  })

  test('handles addOrRemoveValue correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<ToggleButton addOrRemoveValue={onPressMock} />)
    const button = wrapper.find('Button')
    button.simulate('press')

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  test('handles disabled correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(
      <ToggleButton addOrRemoveValue={onPressMock} disabled />
    )
    const button = wrapper.find('Button')

    expect(button.props().disabled).toBe(true)

    if (!button.props().disabled) {
      button.simulate('press')
    }
    expect(onPressMock).toHaveBeenCalledTimes(0)
  })
})

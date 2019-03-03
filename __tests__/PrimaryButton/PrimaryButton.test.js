import React from 'react'
import PrimaryButton from '../../src/components/PrimaryButton'
import styled from 'styled-components'
import { shallow } from 'enzyme'
import mountWithTheme from '../helpers/theme'

describe('PrimaryButton', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<PrimaryButton />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ title: 'title', disabled: true })
    expect(wrapper).toMatchSnapshot()
  })

  test('renders children properly', () => {
    const MockChild = styled.View``
    MockChild.displayName = 'MockChild'
    const wrapper = mountWithTheme(
      <PrimaryButton>
        <MockChild />
      </PrimaryButton>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MockChild').length).toBe(1)
  })

  test('handles onPress correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<PrimaryButton onPress={onPressMock} />)
    const button = wrapper.find('Button')
    button.simulate('press')

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  test('handles disabled correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<PrimaryButton onPress={onPressMock} disabled />)
    const button = wrapper.find('Button')

    expect(button.props().disabled).toBe(true)

    if (!button.props().disabled) {
      button.simulate('press')
    }
    expect(onPressMock).toHaveBeenCalledTimes(0)
  })
})

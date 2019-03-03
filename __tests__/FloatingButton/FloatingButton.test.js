import React from 'react'
import FloatingButton from '../../src/components/FloatingButton'
import styled from 'styled-components'
import { shallow } from 'enzyme'
import mountWithTheme from '../helpers/theme'

describe('FloatingButton', () => {
  test('renders correctly', () => {
    const wrapper = mountWithTheme(<FloatingButton />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ title: 'title' })
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ disabled: true })
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ disabled: false })
    expect(wrapper).toMatchSnapshot()
  })

  test('renders children properly', () => {
    const MockChild = styled.View``
    MockChild.displayName = 'MockChild'
    const wrapper = mountWithTheme(
      <FloatingButton>
        <MockChild />
      </FloatingButton>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MockChild').length).toBe(1)
  })

  test('handles onPress correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<FloatingButton onPress={onPressMock} />)
    const button = wrapper.find('Button')
    button.simulate('press')

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  test('handles disabled correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<FloatingButton onPress={onPressMock} disabled />)
    const button = wrapper.find('Button')
    button.simulate('press')

    expect(onPressMock).toHaveBeenCalledTimes(0)
  })
})

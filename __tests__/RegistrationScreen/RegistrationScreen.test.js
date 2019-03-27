import React from 'react'
import RegistrationScreen from '../../src/components/RegistrationScreen'
import styled from 'styled-components'
import { shallow } from 'enzyme'
import mountWithTheme from '../helpers/theme'

describe('RegistrationScreen', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<RegistrationScreen />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({
      showBack: true,
      title: 'title',
      subtitle: 'subtitle',
      scrollEnabled: true,
      progress: 0.7
    })
    expect(wrapper).toMatchSnapshot()
  })

  test('renders children properly', () => {
    const MockChild = styled.View``
    MockChild.displayName = 'MockChild'
    const wrapper = mountWithTheme(
      <RegistrationScreen>
        <MockChild />
      </RegistrationScreen>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MockChild').length).toBe(1)
  })

  //   test('handles goBack correctly', () => {
  //     const goBackMock = jest.fn()
  //     const navigationMock = { goBack: goBackMock }
  //     const wrapper = mountWithTheme(
  //       <RegistrationScreen navigation={navigationMock} showBack />
  //     )
  //     const button = wrapper.find('BackButton')
  //     expect(button.length).toBe(1)
  //     button.simulate('press')

  //     expect(goBackMock).toHaveBeenCalledTimes(1)
  //   })
})

import React from 'react'
import ScreenHeader from '../../src/components/ScreenHeader'
import styled from 'styled-components'
import { shallow } from 'enzyme'

describe('ScreenHeader', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<ScreenHeader />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ title: 'title', showBack: true })
    expect(wrapper).toMatchSnapshot()
  })

  test('renders children properly', () => {
    const MockChild = styled.View``
    MockChild.displayName = 'MockChild'
    const wrapper = shallow(
      <ScreenHeader>
        <MockChild />
      </ScreenHeader>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MockChild').length).toBe(1)
  })

  //   test('handles goBack correctly', () => {
  //     const goBackMock = jest.fn()
  //     const navigationMock = { goBack: goBackMock }
  //     const wrapper = mountWithTheme(
  //       <ScreenHeader navigation={navigationMock} showBack />
  //     )
  //     const button = wrapper.find('BackButton')
  //     expect(button.length).toBe(1)
  //     button.simulate('press')

  //     expect(goBackMock).toHaveBeenCalledTimes(1)
  //   })
})

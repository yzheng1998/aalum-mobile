import React from 'react'
import LoadingWrapper from '../../src/components/LoadingWrapper'
import styled from 'styled-components'
import { shallow } from 'enzyme'

describe('LoadingWrapper', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<LoadingWrapper />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ loading: true })
    expect(wrapper).toMatchSnapshot()
  })

  test('renders children properly', () => {
    const MockChild1 = styled.View``
    const MockChild2 = styled.View``
    MockChild1.displayName = 'MockChild1'
    MockChild2.displayName = 'MockChild2'
    const wrapper = shallow(
      <LoadingWrapper loading>
        <MockChild1 />
        <MockChild2 />
      </LoadingWrapper>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MockChild1').length).toBe(0)
    expect(wrapper.find('MockChild2').length).toBe(0)

    wrapper.setProps({ loading: false })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MockChild1').length).toBe(1)
    expect(wrapper.find('MockChild2').length).toBe(1)
  })

  test('renders style properly', () => {
    const styleMock = { color: '#ffffff', backgroundColor: '#000000' }
    const wrapper = shallow(
      <LoadingWrapper loading={false} style={styleMock} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import Icon from '../../src/components/Icon'
import { shallow } from 'enzyme'

describe('Icon', () => {
  test('renders correctly on iOS', () => {
    const wrapper = shallow(<Icon name="heart" />)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders correctly on Android', () => {
    jest.mock('Platform', () => {
      const Platform = jest.requireActual('Platform')
      Platform.OS = 'android'
      return Platform
    })
    const wrapper = shallow(<Icon name="heart" />)
    expect(wrapper).toMatchSnapshot()
  })
})

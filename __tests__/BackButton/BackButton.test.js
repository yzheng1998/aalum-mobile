import React from 'react'
import BackButton from '../../src/components/BackButton'
import { shallow } from 'enzyme'

describe('BackButton', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<BackButton />)
    expect(wrapper).toMatchSnapshot()
  })

  test('handles onPress correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<BackButton onPress={onPressMock} />)
    const touchable = wrapper.find('Button')
    touchable.simulate('press')

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })
})

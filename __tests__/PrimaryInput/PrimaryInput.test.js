import React from 'react'
import PrimaryInput from '../../src/components/PrimaryInput'
import { shallow, mount } from 'enzyme'
import mountWithTheme from '../helpers/theme'

describe('PrimaryInput', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<PrimaryInput />)
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ title: 'title' })
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ error: 'error' })
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ icon: 'icon' })
    expect(wrapper).toMatchSnapshot()
  })

  test('Round Container handles onPress correctly', () => {
    const onPressMock = jest.fn()
    const wrapper = shallow(<PrimaryInput onPress={onPressMock} />)

    const touchable = wrapper.find('RoundContainer')
    touchable.simulate('press')

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })
})

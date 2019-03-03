import React from 'react'
import DatePicker from '../../src/components/DatePicker/DatePicker.ios'
import { shallow } from 'enzyme'

describe('DatePicker iOS', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<DatePicker visible={false} />)
    expect(wrapper).toMatchSnapshot()

    const mockDate = new Date('01/01/1996')
    wrapper.setProps({ visible: true, mode: 'date', date: mockDate })
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ mode: 'datetime' })
    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ mode: 'time' })
    expect(wrapper).toMatchSnapshot()
  })

  test('calls doneOnPress correctly', () => {
    const onPressMock = jest.fn()
    const mockDate = new Date('01/01/1996')
    const wrapper = shallow(
      <DatePicker
        date={mockDate}
        mode="date"
        doneOnPress={onPressMock}
        visible
      />
    )
    const button = wrapper.find('doneButton')
    button.simulate('press')

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })
})

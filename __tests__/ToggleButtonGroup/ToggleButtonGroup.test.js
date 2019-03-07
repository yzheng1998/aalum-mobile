import React from 'react'
import ToggleButtonGroup from '../../src/components/ToggleButtonGroup'
import { shallow } from 'enzyme'
import { genderList, stringToEnum } from '../../enumMappings'

describe('ToggleButtonGroup', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <ToggleButtonGroup selectionArray={['']} optionsArray={['']} />
    )
    expect(wrapper).toMatchSnapshot()

    const mockList = ['item1', 'item2', 'item3']
    wrapper.setProps({
      title: 'title',
      optionsArray: mockList,
      selectionArray: mockList,
      isFilter: true,
      disabled: true
    })

    const mockList1 = genderList
    const mockList2 = genderList.map(g => stringToEnum(g))
    wrapper.setProps({ optionsArray: mockList1, selectionArray: mockList2 })
    expect(wrapper).toMatchSnapshot()
  })
})

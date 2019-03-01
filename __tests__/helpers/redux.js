import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

const middlewares = [] // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares)

const initialState = {
  email: '',
  password: '',
  birthday: '',
  name: '',
  genders: [],
  connectsWith: [],
  photo: ''
}

const renderWithTheme = component => {
  return shallow(component, { context: { store: mockStore(initialState) } })
}

export default renderWithTheme

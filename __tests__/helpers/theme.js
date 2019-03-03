import React from 'react'
import { mount } from 'enzyme'
import theme from '../../theme'
import { ThemeProvider } from 'styled-components'

const mountWithTheme = component => {
  return mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

export default mountWithTheme

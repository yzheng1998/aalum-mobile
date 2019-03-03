import { MockedProvider } from 'react-apollo/test-utils'

const renderWithApollo = (component, mocks) => {
  return mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      {component}
    </MockedProvider>
  )
}

export default renderWithApollo

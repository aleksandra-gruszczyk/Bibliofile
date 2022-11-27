import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import Books from '../Books'

import App from '../App'
jest.mock('../Books')
Books.mockImplementation(() => {
  return <div>Books component</div>
})

describe('<App/>', () => {
  it('renders the heading', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    screen.debug()
    const heading = screen.getByText('My books 📝')
    expect(heading).toBeInTheDocument()
  })
})

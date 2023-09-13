/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './components/App'

test('App is ok', () => {
  render(<App />)
  const linkElement = screen.getByText(/Go somewhere/i)
  expect(linkElement).toBeInTheDocument()
})

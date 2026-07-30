import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import Checkout from '../Pages/Checkout'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLoaderData: () => ({
    _id: '123',
    name: 'Test Product',
    brand: 'TestBrand',
    price: 1000,
    photo: 'https://example.com/photo.jpg',
    quantity: 5,
    details: 'Great product',
  }),
  useNavigate: () => vi.fn(),
}))

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({ isConfirmed: false }) },
}))

const renderCheckout = () => {
  return render(
    <DataContext.Provider
      value={{
        dbUser: { name: 'Test User', phone: '123', email: 'test@test.com', address: '123 St' },
      }}
    >
      <Checkout />
    </DataContext.Provider>,
  )
}

describe('Checkout', () => {
  it('renders default quantity of 1', () => {
    renderCheckout()
    const input = document.querySelector('input[type="number"]')
    expect(input.value).toBe('1')
  })

  it('renders full name input with default value', () => {
    renderCheckout()
    expect(screen.getByDisplayValue('Test User')).toBeInTheDocument()
  })

  it('renders quantity available text', () => {
    renderCheckout()
    expect(screen.getByText(/5 available/)).toBeInTheDocument()
  })

  it('renders price details with correct values', () => {
    renderCheckout()
    expect(screen.getByText('1,000 BDT')).toBeInTheDocument()
    expect(screen.getByText('120 BDT')).toBeInTheDocument()
  })
})

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import Checkout from '../Pages/Checkout'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLoaderData: () => ({
    _id: '123',
    name: 'Gaming Mouse',
    brand: 'Logitech',
    price: 2500,
    photo: 'https://example.com/mouse.jpg',
    quantity: 15,
    details: 'High precision mouse',
  }),
  useNavigate: () => vi.fn(),
}))

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({ isConfirmed: false }) },
}))

const renderCheckout = (dbUser = { name: 'Test User', phone: '123', email: 'test@test.com', address: '123 Street' }) => {
  return render(
    <DataContext.Provider value={{ dbUser }}>
      <Checkout />
    </DataContext.Provider>,
  )
}

describe('Checkout', () => {
  it('renders heading', () => {
    renderCheckout()
    expect(screen.getByText('Checkout')).toBeInTheDocument()
  })

  it('renders product name and brand', () => {
    renderCheckout()
    expect(screen.getByText('Gaming Mouse')).toBeInTheDocument()
    expect(screen.getByText('Logitech')).toBeInTheDocument()
  })

  it('renders order summary section', () => {
    renderCheckout()
    expect(screen.getByText('Order Summary')).toBeInTheDocument()
  })

  it('renders customer information form', () => {
    renderCheckout()
    expect(screen.getByText('Customer Information')).toBeInTheDocument()
  })

  it('renders price details', () => {
    renderCheckout()
    expect(screen.getByText('Price Details')).toBeInTheDocument()
    expect(screen.getByText('Delivery Charges')).toBeInTheDocument()
  })

  it('renders place order button', () => {
    renderCheckout()
    expect(screen.getByRole('button', { name: /place order/i })).toBeInTheDocument()
  })
})

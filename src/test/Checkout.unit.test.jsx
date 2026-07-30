import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import Checkout from '../Pages/Checkout'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLoaderData: () => ({
    _id: 'p1', name: 'Product 1', brand: 'BrandX', price: 500,
    photo: 'img.jpg', quantity: 3, details: 'Details',
  }),
  useNavigate: () => vi.fn(),
}))

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({ isConfirmed: false }) },
}))

describe('Checkout unit tests', () => {
  it('renders product brand badge', () => {
    render(
      <DataContext.Provider value={{ dbUser: { name: 'U', phone: '1', email: 'e@e.com', address: 'A' } }}>
        <Checkout />
      </DataContext.Provider>,
    )
    expect(screen.getByText('BrandX')).toBeInTheDocument()
  })

  it('renders price with quantity', () => {
    render(
      <DataContext.Provider value={{ dbUser: { name: 'U', phone: '1', email: 'e@e.com', address: 'A' } }}>
        <Checkout />
      </DataContext.Provider>,
    )
    const priceEls = screen.getAllByText(/500/)
    expect(priceEls.length).toBeGreaterThanOrEqual(1)
  })

  it('renders total amount', () => {
    render(
      <DataContext.Provider value={{ dbUser: { name: 'U', phone: '1', email: 'e@e.com', address: 'A' } }}>
        <Checkout />
      </DataContext.Provider>,
    )
    expect(screen.getByText(/Total Amount/)).toBeInTheDocument()
  })
})

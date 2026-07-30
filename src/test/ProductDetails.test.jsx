import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import ProductDetails from '../Pages/ProductDetails'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLoaderData: () => ({
    _id: '123',
    name: 'Gaming Mouse',
    brand: 'Logitech',
    category: 'Accessories',
    price: 2500,
    details: 'High precision gaming mouse',
    photo: 'https://example.com/mouse.jpg',
    quantity: 15,
    status: 'active',
    createdAt: '2026-01-15T10:00:00Z',
  }),
  useNavigate: () => vi.fn(),
}))

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({ isConfirmed: false }) },
}))

const renderDetails = (dbUser = { role: 'user' }) => {
  return render(
    <DataContext.Provider value={{ dbUser, products: [], setProducts: vi.fn() }}>
      <ProductDetails />
    </DataContext.Provider>,
  )
}

describe('ProductDetails', () => {
  it('renders product name and brand', () => {
    renderDetails()
    expect(screen.getByText('Gaming Mouse')).toBeInTheDocument()
    expect(screen.getByText('Logitech')).toBeInTheDocument()
  })

  it('renders category', () => {
    renderDetails()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
  })

  it('renders price', () => {
    renderDetails()
    expect(screen.getByText(/2500 BDT/)).toBeInTheDocument()
  })

  it('renders in stock quantity', () => {
    renderDetails()
    expect(screen.getByText(/15 units/)).toBeInTheDocument()
  })

  it('renders Buy Now button for active product', () => {
    renderDetails()
    const buyBtn = screen.getByRole('link', { name: /buy now/i })
    expect(buyBtn).toHaveAttribute('href', '/checkout/123')
  })

  it('shows admin actions for admin users', () => {
    renderDetails({ role: 'admin' })
    expect(screen.getByText('Admin Actions:')).toBeInTheDocument()
    expect(screen.getByText('Edit')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })

  it('hides admin actions for regular users', () => {
    renderDetails({ role: 'user' })
    expect(screen.queryByText('Admin Actions:')).not.toBeInTheDocument()
  })
})

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import UpdateProduct from '../Pages/UpdateProduct'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLoaderData: () => ({
    _id: '123',
    name: 'Test Product',
    photo: 'https://example.com/photo.jpg',
    category: 'Electronics',
    status: 'active',
    price: 1500,
    quantity: 10,
    details: 'Product details here',
    brand: 'TestBrand',
  }),
}))

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({}) },
}))

describe('UpdateProduct', () => {
  it('renders heading', () => {
    render(<UpdateProduct />)
    const heading = screen.getByRole('heading', { name: /update product/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders form with default values', () => {
    render(<UpdateProduct />)
    const nameInput = screen.getByDisplayValue('Test Product')
    expect(nameInput).toBeInTheDocument()
    expect(screen.getByDisplayValue('10')).toBeInTheDocument()
    expect(screen.getByDisplayValue('TestBrand')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Electronics')).toBeInTheDocument()
    expect(screen.getByDisplayValue('1500')).toBeInTheDocument()
  })

  it('renders back link', () => {
    render(<UpdateProduct />)
    const link = screen.getByRole('link', { name: /back to details/i })
    expect(link).toHaveAttribute('href', '/productDetails/123')
  })

  it('renders status select', () => {
    render(<UpdateProduct />)
    expect(screen.getByText('Active')).toBeInTheDocument()
    expect(screen.getByText('Inactive')).toBeInTheDocument()
  })
})

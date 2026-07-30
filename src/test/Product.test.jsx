import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Product from '../Components/Products/Product'

const mockProduct = {
  _id: '123',
  name: 'Test Product',
  price: 1500,
  details: 'A great product for testing',
  photo: 'https://example.com/photo.jpg',
  brand: 'TestBrand',
  status: 'active',
  quantity: 10,
}

describe('Product', () => {
  it('renders product name and price', () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} />
      </MemoryRouter>,
    )
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText(/1500 BDT/)).toBeInTheDocument()
  })

  it('renders brand badge', () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} />
      </MemoryRouter>,
    )
    expect(screen.getByText('TestBrand')).toBeInTheDocument()
  })

  it('renders details', () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} />
      </MemoryRouter>,
    )
    expect(screen.getByText('A great product for testing')).toBeInTheDocument()
  })

  it('shows Buy now button when in stock', () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} />
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute('href', '/checkout/123')
  })

  it('shows Out of Stock overlay when quantity is 0', () => {
    const outOfStock = { ...mockProduct, quantity: 0 }
    render(
      <MemoryRouter>
        <Product product={outOfStock} />
      </MemoryRouter>,
    )
    expect(screen.getByText('Out of Stock')).toBeInTheDocument()
  })

  it('shows Out of Stock when status is inactive', () => {
    const inactive = { ...mockProduct, status: 'inactive', quantity: 5 }
    render(
      <MemoryRouter>
        <Product product={inactive} />
      </MemoryRouter>,
    )
    expect(screen.getByText('Out of Stock')).toBeInTheDocument()
  })

  it('renders view details link', () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} />
      </MemoryRouter>,
    )
    const detailsBtn = screen.getByLabelText('View details')
    expect(detailsBtn.closest('a')).toHaveAttribute('href', '/productdetails/123')
  })
})

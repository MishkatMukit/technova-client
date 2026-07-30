import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import FeaturedProducts from '../Components/FeaturedProducts'

const mockProducts = [
  { _id: '1', name: 'Product A', price: 100, details: 'Detail A', photo: 'img1.jpg', brand: 'BrandA', status: 'active', quantity: 5 },
  { _id: '2', name: 'Product B', price: 200, details: 'Detail B', photo: 'img2.jpg', brand: 'BrandB', status: 'active', quantity: 3 },
]

describe('FeaturedProducts', () => {
  it('renders heading', () => {
    render(
      <MemoryRouter>
        <FeaturedProducts featuredProducts={mockProducts} />
      </MemoryRouter>,
    )
    expect(screen.getByText('Our Featured Gadgets')).toBeInTheDocument()
  })

  it('renders all product names', () => {
    render(
      <MemoryRouter>
        <FeaturedProducts featuredProducts={mockProducts} />
      </MemoryRouter>,
    )
    expect(screen.getByText('Product A')).toBeInTheDocument()
    expect(screen.getByText('Product B')).toBeInTheDocument()
  })

  it('renders View All Products link', () => {
    render(
      <MemoryRouter>
        <FeaturedProducts featuredProducts={mockProducts} />
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: /view all products/i })).toHaveAttribute('href', '/products')
  })

  it('renders empty state when no products', () => {
    render(
      <MemoryRouter>
        <FeaturedProducts featuredProducts={[]} />
      </MemoryRouter>,
    )
    expect(screen.getByText('Our Featured Gadgets')).toBeInTheDocument()
  })
})

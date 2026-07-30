import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import Products from '../Pages/Products'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLoaderData: () => [
    { _id: '1', name: 'Laptop', price: 50000, details: 'Gaming laptop', photo: 'img1.jpg', brand: 'Dell', category: 'Electronics', status: 'active', quantity: 10 },
    { _id: '2', name: 'Mouse', price: 1500, details: 'Wireless mouse', photo: 'img2.jpg', brand: 'Logitech', category: 'Accessories', status: 'active', quantity: 5 },
  ],
}))

describe('Products branch coverage', () => {
  it('does not show Add Product for user role', () => {
    render(
      <DataContext.Provider
        value={{
          dbUser: { role: 'user' },
          products: [
            { _id: '1', name: 'Laptop', price: 50000, details: 'Gaming laptop', photo: 'img1.jpg', brand: 'Dell', category: 'Electronics', status: 'active', quantity: 10 },
          ],
          setProducts: vi.fn(),
        }}
      >
        <Products />
      </DataContext.Provider>,
    )
    expect(screen.queryByText('Add Product')).not.toBeInTheDocument()
  })

  it('shows Add Product for admin role', () => {
    render(
      <DataContext.Provider
        value={{
          dbUser: { role: 'admin' },
          products: [
            { _id: '1', name: 'Laptop', price: 50000, details: 'Gaming laptop', photo: 'img1.jpg', brand: 'Dell', category: 'Electronics', status: 'active', quantity: 10 },
          ],
          setProducts: vi.fn(),
        }}
      >
        <Products />
      </DataContext.Provider>,
    )
    expect(screen.getByText('Add Product')).toBeInTheDocument()
  })

  it('shows no products found for empty results', () => {
    render(
      <DataContext.Provider
        value={{
          dbUser: { role: 'user' },
          products: [],
          setProducts: vi.fn(),
        }}
      >
        <Products />
      </DataContext.Provider>,
    )
    expect(screen.getByText('No products found')).toBeInTheDocument()
  })
})

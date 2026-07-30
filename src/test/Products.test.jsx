import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import { useLoaderData } from 'react-router'
import Products from '../Pages/Products'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLoaderData: () => [
    { _id: '1', name: 'Product A', price: 100, details: 'Detail A', photo: 'img1.jpg', brand: 'BrandA', category: 'Electronics', status: 'active', quantity: 5 },
    { _id: '2', name: 'Product B', price: 200, details: 'Detail B', photo: 'img2.jpg', brand: 'BrandB', category: 'Accessories', status: 'active', quantity: 0 },
    { _id: '3', name: 'Product C', price: 300, details: 'Detail C', photo: 'img3.jpg', brand: 'BrandC', category: 'Electronics', status: 'inactive', quantity: 10 },
  ],
}))

const renderProducts = (dbUser = { role: 'user' }) => {
  return render(
    <DataContext.Provider value={{ dbUser, products: useLoaderData(), setProducts: vi.fn() }}>
      <Products />
    </DataContext.Provider>,
  )
}

describe('Products', () => {
  it('renders heading', () => {
    renderProducts()
    expect(screen.getByText('All products')).toBeInTheDocument()
  })

  it('renders search input', () => {
    renderProducts()
    expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument()
  })

  it('shows "Add Product" button for admin users', () => {
    renderProducts({ role: 'admin' })
    expect(screen.getByText('Add Product')).toBeInTheDocument()
  })

  it('hides "Add Product" button for regular users', () => {
    renderProducts({ role: 'user' })
    expect(screen.queryByText('Add Product')).not.toBeInTheDocument()
  })

  it('shows products count', () => {
    renderProducts()
    expect(screen.getByText(/3 products found/)).toBeInTheDocument()
  })
})

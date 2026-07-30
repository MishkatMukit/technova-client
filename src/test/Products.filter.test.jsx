import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import Products from '../Pages/Products'

const mockProducts = [
  { _id: '1', name: 'Laptop', price: 50000, details: 'Gaming laptop', photo: 'img1.jpg', brand: 'Dell', category: 'Electronics', status: 'active', quantity: 10 },
  { _id: '2', name: 'Mouse', price: 1500, details: 'Wireless mouse', photo: 'img2.jpg', brand: 'Logitech', category: 'Accessories', status: 'active', quantity: 5 },
  { _id: '3', name: 'Keyboard', price: 3000, details: 'Mechanical keyboard', photo: 'img3.jpg', brand: 'Logitech', category: 'Accessories', status: 'inactive', quantity: 0 },
]

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLoaderData: () => mockProducts,
}))

const renderProducts = () => {
  return render(
    <DataContext.Provider value={{ dbUser: { role: 'user' }, products: mockProducts, setProducts: vi.fn() }}>
      <Products />
    </DataContext.Provider>,
  )
}

describe('Products filtering', () => {
  it('shows all products when no filter is applied', () => {
    renderProducts()
    expect(screen.getByText('3 products found')).toBeInTheDocument()
  })

  it('filters products by search text', async () => {
    const user = userEvent.setup()
    renderProducts()
    const searchInput = screen.getByPlaceholderText('Search products...')
    await user.type(searchInput, 'Mouse')
    expect(screen.getByText('Mouse')).toBeInTheDocument()
    expect(screen.queryByText('Laptop')).not.toBeInTheDocument()
  })

  it('shows correct count after filtering', async () => {
    const user = userEvent.setup()
    renderProducts()
    const searchInput = screen.getByPlaceholderText('Search products...')
    await user.type(searchInput, 'Laptop')
    expect(screen.getByText('1 product found')).toBeInTheDocument()
  })

  it('shows no products found when nothing matches', async () => {
    const user = userEvent.setup()
    renderProducts()
    const searchInput = screen.getByPlaceholderText('Search products...')
    await user.type(searchInput, 'XYZ')
    expect(screen.getByText('No products found')).toBeInTheDocument()
  })
})

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import AddProducts from '../Pages/AddProducts'

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({}) },
}))

describe('AddProducts', () => {
  it('renders heading', () => {
    render(
      <MemoryRouter>
        <AddProducts />
      </MemoryRouter>,
    )
    expect(screen.getByText('Add New Product')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(
      <MemoryRouter>
        <AddProducts />
      </MemoryRouter>,
    )
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Quantity')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Brand')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Category')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Price')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Details')).toBeInTheDocument()
  })

  it('renders back link', () => {
    render(
      <MemoryRouter>
        <AddProducts />
      </MemoryRouter>,
    )
    const link = screen.getByRole('link', { name: /back to products/i })
    expect(link).toHaveAttribute('href', '/products')
  })

  it('renders submit button', () => {
    render(
      <MemoryRouter>
        <AddProducts />
      </MemoryRouter>,
    )
    expect(screen.getByDisplayValue('Add Product')).toBeInTheDocument()
  })
})

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Orders from '../Components/DashboardComponents/Orders/Orders'

const mockOrders = [
  {
    _id: 'ord1',
    productName: 'Test Product',
    quantity: 2,
    total: 3000,
    status: 'pending',
    createdAt: '2026-07-01T10:00:00Z',
  },
]

describe('Orders', () => {
  it('renders table headers', () => {
    render(<Orders orders={mockOrders} />)
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Order ID')).toBeInTheDocument()
    expect(screen.getByText('Quantity')).toBeInTheDocument()
    expect(screen.getByText('Total')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
  })

  it('renders order data', () => {
    render(<Orders orders={mockOrders} />)
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('ord1')).toBeInTheDocument()
    expect(screen.getByText('pending')).toBeInTheDocument()
  })

  it('shows no orders message when empty', () => {
    render(<Orders orders={[]} />)
    expect(screen.getByText('No orders found')).toBeInTheDocument()
  })
})

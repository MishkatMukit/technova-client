import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import AdminOrders from '../Components/DashboardComponents/Orders/AdminOrders'

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({ isConfirmed: false }) },
}))

const mockOrders = [
  { _id: 'ord1', customerName: 'Alice', productName: 'Laptop', quantity: 1, total: 50000, status: 'pending', address: '123 Street', city: 'Dhaka', email: 'alice@test.com', phone: '123', createdAt: '2026-07-01T10:00:00Z' },
  { _id: 'ord2', customerName: 'Bob', productName: 'Mouse', quantity: 2, total: 2500, status: 'confirmed', address: '456 Road', city: 'CTG', email: 'bob@test.com', phone: '456', createdAt: '2026-06-01T10:00:00Z' },
]

describe('AdminOrders', () => {
  it('renders table headers', () => {
    render(<AdminOrders />)
    expect(screen.getByText('Customer')).toBeInTheDocument()
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
  })

  it('shows no orders message initially', () => {
    render(<AdminOrders />)
    expect(screen.getByText('No orders found')).toBeInTheDocument()
  })
})

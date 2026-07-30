import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import Dashboard from '../Pages/Dashboard'

vi.mock('../Components/DashboardComponents/Orders/Orders', () => ({
  default: ({ orders }) => <div data-testid="orders">Orders</div>,
}))

vi.mock('../Components/DashboardComponents/Orders/AdminOrders', () => ({
  default: () => <div data-testid="admin-orders">Admin Orders</div>,
}))

vi.mock('../Components/DashboardComponents/Users/Users', () => ({
  default: ({ users }) => <div data-testid="users">Users: {users?.length}</div>,
}))

vi.mock('../Components/DashboardComponents/EditProfile', () => ({
  default: ({ isOpen, onClose }) => isOpen ? <div>Edit Profile Open</div> : null,
}))

const adminUser = {
  name: 'Admin',
  email: 'admin@test.com',
  photoUrl: 'https://example.com/admin.jpg',
  address: 'Office',
  phone: '000',
  role: 'admin',
}

describe('Dashboard admin', () => {
  it('renders admin panel with Users and AdminOrders tabs', () => {
    render(
      <DataContext.Provider value={{ dbUser: adminUser, setdbUser: vi.fn() }}>
        <Dashboard />
      </DataContext.Provider>,
    )
    expect(screen.getByTestId('users')).toBeInTheDocument()
    expect(screen.getByTestId('admin-orders')).toBeInTheDocument()
  })

  it('renders admin name and role', () => {
    render(
      <DataContext.Provider value={{ dbUser: adminUser, setdbUser: vi.fn() }}>
        <Dashboard />
      </DataContext.Provider>,
    )
    expect(screen.getByText('Admin')).toBeInTheDocument()
    expect(screen.getByText('admin')).toBeInTheDocument()
  })
})

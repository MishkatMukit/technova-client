import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import Dashboard from '../Pages/Dashboard'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}))

vi.mock('../Components/DashboardComponents/Orders/Orders', () => ({
  default: ({ orders }) => <div data-testid="orders">Orders: {orders?.length ?? 0}</div>,
}))

vi.mock('../Components/DashboardComponents/Orders/AdminOrders', () => ({
  default: () => <div data-testid="admin-orders">Admin Orders</div>,
}))

vi.mock('../Components/DashboardComponents/Users/Users', () => ({
  default: ({ users }) => <div data-testid="users">Users: {users?.length ?? 0}</div>,
}))

vi.mock('../Components/DashboardComponents/EditProfile', () => ({
  default: ({ isOpen, onClose }) => isOpen ? <div data-testid="edit-profile">Edit Profile</div> : null,
}))

const mockDbUser = {
  name: 'Test User',
  email: 'test@test.com',
  photoUrl: 'https://example.com/photo.jpg',
  address: '123 Street',
  phone: '1234567890',
  role: 'user',
}

const renderDashboard = (dbUser = mockDbUser) => {
  return render(
    <DataContext.Provider value={{ dbUser, setdbUser: vi.fn() }}>
      <Dashboard />
    </DataContext.Provider>,
  )
}

describe('Dashboard', () => {
  it('renders user name and email', () => {
    renderDashboard()
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('test@test.com')).toBeInTheDocument()
  })

  it('renders user role badge', () => {
    renderDashboard()
    expect(screen.getByText('user')).toBeInTheDocument()
  })

  it('renders edit profile button', () => {
    renderDashboard()
    const editButton = screen.getByRole('button')
    expect(editButton).toBeInTheDocument()
  })

  it('shows Orders tab for regular users', () => {
    renderDashboard()
    expect(screen.getByTestId('orders')).toBeInTheDocument()
  })

  it('shows Users and AdminOrders tabs for admin users', () => {
    const adminUser = { ...mockDbUser, role: 'admin' }
    renderDashboard(adminUser)
    expect(screen.getByTestId('users')).toBeInTheDocument()
    expect(screen.getByTestId('admin-orders')).toBeInTheDocument()
  })
})

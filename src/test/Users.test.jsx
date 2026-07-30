import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Users from '../Components/DashboardComponents/Users/Users'

const mockUsers = [
  {
    _id: 'usr1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    photoUrl: 'https://example.com/photo.jpg',
    address: '123 Main St',
    creationTime: '2026-01-01',
    lastSignInTime: '2026-07-01',
  },
]

describe('Users', () => {
  it('renders table headers', () => {
    render(<Users users={mockUsers} />)
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders user data', () => {
    render(<Users users={mockUsers} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('1234567890')).toBeInTheDocument()
  })

  it('renders empty state when no users', () => {
    const { container } = render(<Users users={[]} />)
    const tbody = container.querySelector('tbody')
    expect(tbody.children.length).toBe(0)
  })
})

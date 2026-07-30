import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import Navbar from '../Components/Navbar'

vi.mock('sweetalert2', () => ({
  default: {
    fire: vi.fn().mockResolvedValue({ isConfirmed: false }),
  },
}))

const renderWithAuth = (user = null) => {
  return render(
    <AuthContext.Provider value={{ user, logoutUser: vi.fn(), loading: false }}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>,
  )
}

describe('Navbar', () => {
  it('renders navigation links', () => {
    renderWithAuth()
    const links = screen.getAllByText('Home')
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Products').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Login button when user is not authenticated', () => {
    renderWithAuth(null)
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Logout button when user is authenticated', () => {
    const user = { photoURL: 'https://example.com/photo.jpg' }
    renderWithAuth(user)
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  })
})

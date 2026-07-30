import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import Navbar from '../Components/Navbar'

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({ isConfirmed: true }) },
}))

const renderNavbar = (user = null) => {
  return render(
    <AuthContext.Provider value={{ user, logoutUser: vi.fn().mockResolvedValue(), loading: false }}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>,
  )
}

describe('Navbar interactions', () => {
  it('shows user image when authenticated', () => {
    const testUser = { photoURL: 'https://example.com/avatar.jpg' }
    renderNavbar(testUser)
    const imgs = document.querySelectorAll('img[alt=""]')
    const userImg = Array.from(imgs).find(i => i.className.includes('rounded-full'))
    expect(userImg).toBeTruthy()
    expect(userImg.src).toBe('https://example.com/avatar.jpg')
  })

  it('renders Login link when logged out', () => {
    renderNavbar(null)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.queryByText('Logout')).not.toBeInTheDocument()
  })

  it('renders Logout button when logged in', () => {
    renderNavbar({ photoURL: 'https://example.com/photo.jpg' })
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
    expect(screen.queryByText('Login')).not.toBeInTheDocument()
  })
})

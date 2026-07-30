import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import Login from '../Components/AuthComponents/Login/Login'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLocation: () => ({ state: null }),
  useNavigate: () => vi.fn(),
}))

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({}) },
}))

const renderLogin = () => {
  return render(
    <AuthContext.Provider value={{ loginUser: vi.fn(), setUser: vi.fn(), setEmail: vi.fn(), googleSignIn: vi.fn() }}>
      <Login />
    </AuthContext.Provider>,
  )
}

describe('Login', () => {
  it('renders the heading', () => {
    renderLogin()
    expect(screen.getByText('Please Login')).toBeInTheDocument()
  })

  it('renders email and password fields', () => {
    renderLogin()
    expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Password')).toBeInTheDocument()
  })

  it('renders login with Google button', () => {
    renderLogin()
    expect(screen.getByText('Login with Google')).toBeInTheDocument()
  })

  it('renders register link', () => {
    renderLogin()
    const registerLink = screen.getByRole('link', { name: /register/i })
    expect(registerLink).toHaveAttribute('href', '/register')
  })
})

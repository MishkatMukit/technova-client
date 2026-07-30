import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import Register from '../Components/AuthComponents/Register/Register'

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => vi.fn(),
}))

vi.mock('sweetalert2', () => ({
  default: { fire: vi.fn().mockResolvedValue({}) },
}))

const renderRegister = () => {
  return render(
    <AuthContext.Provider value={{ registerUser: vi.fn(), setUser: vi.fn(), updateUser: vi.fn() }}>
      <Register />
    </AuthContext.Provider>,
  )
}

describe('Register', () => {
  it('renders heading', () => {
    renderRegister()
    expect(screen.getByText('Register your account')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    renderRegister()
    expect(screen.getByPlaceholderText('Enter Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Password')).toBeInTheDocument()
  })

  it('renders file input for photo', () => {
    renderRegister()
    const fileInput = screen.getByRole('button', { name: /register/i })
    expect(fileInput).toBeInTheDocument()
    const inputs = document.querySelectorAll('input[type="file"]')
    expect(inputs.length).toBe(1)
  })

  it('renders submit button', () => {
    renderRegister()
    const btn = screen.getByRole('button', { name: /register/i })
    expect(btn).toBeInTheDocument()
  })
})

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from '../Pages/Contact'

describe('Contact', () => {
  it('renders heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders location info', () => {
    render(<Contact />)
    expect(screen.getByText(/Location/i)).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/valid email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })
})

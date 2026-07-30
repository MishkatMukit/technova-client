import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Developer from '../Pages/Developer'

describe('Developer', () => {
  it('renders About Us heading', () => {
    render(<Developer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders Meet The Devs heading', () => {
    render(<Developer />)
    expect(screen.getByText('Meet The Devs')).toBeInTheDocument()
  })

  it('renders all developer names', () => {
    render(<Developer />)
    expect(screen.getByText('Mishkat Mahabub')).toBeInTheDocument()
    expect(screen.getByText('Shajedul Islam')).toBeInTheDocument()
    expect(screen.getByText('Shoriful Hoque Nobin')).toBeInTheDocument()
    expect(screen.getByText('Tawsiful Islam Sotaz')).toBeInTheDocument()
  })
})

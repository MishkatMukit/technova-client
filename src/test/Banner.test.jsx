import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Banner from '../Components/Banner'

describe('Banner', () => {
  it('renders heading text', () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>,
    )
    expect(screen.getByText('Premium Tech.')).toBeInTheDocument()
  })

  it('renders two Shop Now buttons linking to /products', () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>,
    )
    const buttons = screen.getAllByRole('button', { name: /shop now/i })
    expect(buttons).toHaveLength(2)
    buttons.forEach((btn) => {
      expect(btn.closest('a')).toHaveAttribute('href', '/products')
    })
  })

  it('has two carousel slides', () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>,
    )
    const slides = document.querySelectorAll('.carousel-item')
    expect(slides).toHaveLength(2)
  })
})

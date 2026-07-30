import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import HomeLayout from '../Layouts/HomeLayout'

vi.mock('../Components/Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}))

vi.mock('../Components/Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}))

describe('HomeLayout', () => {
  it('renders Navbar and Footer', () => {
    render(
      <MemoryRouter>
        <HomeLayout />
      </MemoryRouter>,
    )
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})

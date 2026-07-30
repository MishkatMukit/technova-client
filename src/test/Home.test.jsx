import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import Home from '../Pages/Home'

vi.mock('react-router', () => ({
  useLoaderData: vi.fn(() => []),
  use: vi.fn(),
  Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
  NavLink: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
  Outlet: () => <div data-testid="outlet" />,
}))

vi.mock('../Components/Banner', () => ({
  default: () => <div data-testid="banner">Banner</div>,
}))

vi.mock('../Components/Faq', () => ({
  default: () => <div data-testid="faq">Faq</div>,
}))

vi.mock('../Components/FeaturedProducts', () => ({
  default: ({ featuredProducts }) => (
    <div data-testid="featured">
      Featured: {featuredProducts?.length ?? 0} products
    </div>
  ),
}))

const renderHome = () => {
  return render(
    <AuthContext.Provider value={{ user: null }}>
      <DataContext.Provider value={{ dbUser: null }}>
        <Home />
      </DataContext.Provider>
    </AuthContext.Provider>,
  )
}

describe('Home', () => {
  it('renders Banner, FeaturedProducts and Faq', () => {
    renderHome()
    expect(screen.getByTestId('banner')).toBeInTheDocument()
    expect(screen.getByTestId('featured')).toBeInTheDocument()
    expect(screen.getByTestId('faq')).toBeInTheDocument()
  })
})

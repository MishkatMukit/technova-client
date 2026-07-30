import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import PrivateRoute from '../Routes/PrivateRoute'

vi.mock('../Components/Loading/Loading', () => ({
  default: () => <div data-testid="loading">Loading...</div>,
}))

const renderWithAuth = (user = null, loading = false) => {
  return render(
    <AuthContext.Provider value={{ user, loading }}>
      <MemoryRouter initialEntries={['/dashboard']}>
        <PrivateRoute>
          <div data-testid="protected">Protected Content</div>
        </PrivateRoute>
      </MemoryRouter>
    </AuthContext.Provider>,
  )
}

describe('PrivateRoute', () => {
  it('renders children when user is authenticated', () => {
    renderWithAuth({ uid: '123' })
    expect(screen.getByTestId('protected')).toBeInTheDocument()
  })

  it('shows loading spinner when loading', () => {
    renderWithAuth(null, true)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })

  it('redirects to login when user is not authenticated', () => {
    renderWithAuth(null, false)
    expect(screen.queryByTestId('protected')).not.toBeInTheDocument()
  })
})

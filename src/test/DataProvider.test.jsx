import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import DataProvider from '../Provider/AuthProvider/DataProvider'

describe('DataProvider', () => {
  it('renders children', () => {
    render(
      <AuthContext.Provider value={{ user: null }}>
        <DataProvider>
          <div data-testid="child">Child Content</div>
        </DataProvider>
      </AuthContext.Provider>,
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})

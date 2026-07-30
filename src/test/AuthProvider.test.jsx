import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import AuthProvider from '../Provider/AuthProvider/AuthProvider'

vi.mock('firebase/auth', () => {
  class MockGoogleAuthProvider {}
  return {
    createUserWithEmailAndPassword: vi.fn(),
    GoogleAuthProvider: MockGoogleAuthProvider,
    getAuth: vi.fn(() => ({})),
    onAuthStateChanged: vi.fn((auth, cb) => { cb(null); return vi.fn() }),
    signInWithEmailAndPassword: vi.fn(),
    signInWithPopup: vi.fn(),
    signOut: vi.fn(),
    updateProfile: vi.fn(),
    sendPasswordResetEmail: vi.fn(),
  }
})

vi.mock('../../Firebase/firebase.init', () => ({
  auth: {},
}))

describe('AuthProvider', () => {
  it('renders children', () => {
    render(
      <AuthProvider>
        <div data-testid="child">Child Content</div>
      </AuthProvider>,
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})

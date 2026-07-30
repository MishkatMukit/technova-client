import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataContext } from '../Provider/AuthProvider/DataProvider'
import EditProfile from '../Components/DashboardComponents/EditProfile'

vi.mock('sweetalert2', () => ({
  default: {
    fire: vi.fn().mockResolvedValue({ isConfirmed: false }),
  },
}))

const mockDbUser = {
  name: 'Test User',
  phone: '123456',
  address: 'Test Address',
  photoUrl: 'https://example.com/photo.jpg',
}

const renderWithData = (isOpen, dbUser = mockDbUser) => {
  return render(
    <DataContext.Provider value={{ dbUser, setdbUser: vi.fn() }}>
      <EditProfile isOpen={isOpen} onClose={vi.fn()} />
    </DataContext.Provider>,
  )
}

describe('EditProfile', () => {
  it('returns null when isOpen is false', () => {
    const { container } = renderWithData(false)
    expect(container.innerHTML).toBe('')
  })

  it('renders form when isOpen is true', () => {
    renderWithData(true)
    expect(screen.getByText('Edit Profile')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })
})

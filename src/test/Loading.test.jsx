import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Loading from '../Components/Loading/Loading'

describe('Loading', () => {
  it('renders loading bars', () => {
    const { container } = render(<Loading />)
    const loadingEl = container.querySelector('.loading')
    expect(loadingEl).toBeInTheDocument()
    expect(loadingEl).toHaveClass('loading-bars')
  })
})

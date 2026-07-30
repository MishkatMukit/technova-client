import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Faq from '../Components/Faq'

describe('Faq', () => {
  it('renders the heading', () => {
    render(<Faq />)
    expect(screen.getByText('Frequently Asked Question')).toBeInTheDocument()
  })

  it('renders all questions', () => {
    render(<Faq />)
    expect(screen.getByText(/Q1: What is TechNova/i)).toBeInTheDocument()
    expect(screen.getByText(/Q2: How do I place an order/i)).toBeInTheDocument()
    expect(screen.getByText(/Q3: What is the delivery charge/i)).toBeInTheDocument()
    expect(screen.getByText(/Q4: How long does delivery take/i)).toBeInTheDocument()
    expect(screen.getByText(/Q5: How can I contact TechNova/i)).toBeInTheDocument()
  })

  it('renders the FAQ image', () => {
    render(<Faq />)
    const img = screen.getByAltText('FAQ')
    expect(img).toBeInTheDocument()
  })
})

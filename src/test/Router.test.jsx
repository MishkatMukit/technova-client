import { describe, it, expect } from 'vitest'
import router from '../Routes/Router'

describe('Router', () => {
  it('exports a router with routes', () => {
    expect(router).toBeDefined()
    expect(router.routes).toBeDefined()
    expect(router.routes.length).toBeGreaterThan(0)
  })

  it('has home route at path /', () => {
    const homeRoute = router.routes[0]
    expect(homeRoute.path).toBe('/')
  })
})

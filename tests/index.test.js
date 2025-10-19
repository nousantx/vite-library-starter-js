import { describe, it, expect } from 'vitest'
import { main } from '../src/index.ts'

describe('Module Unit Test', () => {
  it('should pass the test', () => {
    expect(main('Module')).toBe('Hello, Module!')
  })
})

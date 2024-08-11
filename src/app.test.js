import { describe, test, expect } from 'vitest'
import { sayHello } from './app'

describe('sayHello', () => {
  test('should return Hello', () => {
    expect(sayHello()).toBe('Hello')
  })
})
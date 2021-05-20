const recursiveCountHi = require('../exercises/recursiveCountHi');

describe('recursiveCountHi', () => {
  it('Counts the correct number of "hi" substrings', () => {
    expect(recursiveCountHi('abc hi ho')).toBe(1)
    expect(recursiveCountHi('ABChi hi')).toBe(2)
    expect(recursiveCountHi('hihi')).toBe(2)
    expect(recursiveCountHi('hihi')).toBe(2)
    expect(recursiveCountHi('hiHIhi')).toBe(2)
    expect(recursiveCountHi('')).toBe(0)
    expect(recursiveCountHi('h')).toBe(0)
    expect(recursiveCountHi('hi')).toBe(1)
    expect(recursiveCountHi('Hi is no HI on ahI')).toBe(0)
    expect(recursiveCountHi('hiho not HOHIhi')).toBe(2)
  })

  it('Must be implemented recursively and not with a for/while loop. You cannot use loops.', () => {
    expect(recursiveCountHi.toString()).not.toMatch(/for|while/)
  })
})

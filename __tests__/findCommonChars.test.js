const findCommonChars = require('../exercises/findCommonChars');

describe('findCommonChars', () => {
  it('Find the common characters in an array of strings', () => {
    expect(findCommonChars(["bella", "label", "roller"]).sort()).toEqual(["e", "l", "l"])
    expect(findCommonChars(["cool", "lock", "cook"]).sort()).toEqual(["c", "o"])
    expect(findCommonChars(["cool", "loco"]).sort()).toEqual(["c", "l", "o", "o"])
    expect(findCommonChars(["z", "zoo"]).sort()).toEqual(["z"])
    expect(findCommonChars(["abc", "xyz", "pqr"]).sort()).toEqual([])
  })
})

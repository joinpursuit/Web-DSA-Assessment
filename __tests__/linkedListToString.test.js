const LinkedList = require('../exercises/linkedListToString')

describe('LinkedList .toString() method', () => {
  it('Returns a string representation of a LinkedList', () => {
    expect(LinkedList.fromArray([1, 2, 3, 4, 5, 6]).toString()).toBe("1->2->3->4->5->6->null")
    expect(LinkedList.fromArray([100]).toString()).toBe("100->null")
    expect(LinkedList.fromArray([365, 19]).toString()).toBe("365->19->null")
  })

  it('calling .toString() multiple times returns the same result', () => {
    let ll = LinkedList.fromArray([6, 5, 4, 3, 2, 1])
    expect(ll.toString()).toBe("6->5->4->3->2->1->null")
    expect(ll.toString()).toBe("6->5->4->3->2->1->null")
  })

  it('Returns "null" when stringifying an the empty list', () => {
    let ll = LinkedList.fromArray([])
    expect(ll.toString()).toBe("null")
  })
})

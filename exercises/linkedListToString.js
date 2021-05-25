/*

  # LinkedList.toString()
  
  Complete the .toString() method in the LinkedList class below. This method returns 
  a human readable representation of the linked list values connected by arrows ("->")

  Example:
  let list = LinkedList.fromArray([1, 2, 3, 4, 5]) // list is a linked list created from an array
  console.log(list.toString()) // should print "1->2->3->4->5->null"

  Notes:
  * Do not modify the existing functions or classes. Your changes should only be in the toString() method
  * The linked list will ever only hold numbers
*/

/**
 * Nodes hold a value and a reference to a next node
 * @class 
 */
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Creates a LinkedList that will hold references to the head and tail nodes
 * which allows to have constant time insertion in both ends of the list
 * @class 
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendFirst(value) {
    let newHead = new LinkedListNode(value);
    newHead.next = this.head;
    if (this.head === null) {
      this.tail = newHead;
    }
    this.head = newHead;
  }

  appendLast(value) {
    let newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
  }

  appendAtIndex(index, value) {
    let crrIndex = 0;
    let newNode = new LinkedListNode(value);
    let node = this.head;
    if (index !== 0) {
      while (node.next !== null && crrIndex !== index - 1) {
        node = node.next;
        crrIndex += 1;
      }
      newNode.next = node.next;
      node.next = newNode;
      if (newNode.next === null) {
        this.tail = newNode
      }
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  removeFirst() {
    let oldHead = this.head
    if (oldHead.next === null) {
      this.head = null;
      this.tail = null;
      return oldHead.value
    }
    let newHead = oldHead.next;
    oldHead.next = null
    this.head = newHead;
    return oldHead.value;
  }

  /**
   * Finds node that satisfies the callback test 
   * @param callback function to execute on each node, taking the current node as argument
   * @returns {LinkedListNode} that satisfies the provided testing function. Otherwise undefined
   */
  find(callback) {
    let crrNode = this.head
    while (crrNode.next !== null) {
      if (callback(crrNode)) {
        return crrNode.value;
      }
      crrNode = crrNode.next;
    }
    return undefined;
  }

  /**
   * Return a human readable representation of the Linked List
   * @return {string} 
   */
  toString() {
    let currentNode = this.head;
    let LLString = ""

    while(currentNode) {

      LLString +=`${currentNode.value}->`
      currentNode = currentNode.next
      
    }
    LLString += "null"

    return LLString

  }

  static fromArray(array) {
    let ll = new LinkedList();
    for (let element of array) {
      ll.appendLast(element);
    }
    return ll;
  }
}


module.exports = LinkedList;

class ListNode {
  // val: number
  // next: ListNode | null
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  valueOf() {
    let result = []
    let current = this

    while (current !== null) {
      result.push(current.val)
      current = current.next
    }

    return result
  }

  toString() {
    return this.valueOf()
  }
}

function mergeTwoLists(list1, list2) {
  if (!list1 && !list2) return null
  let result = new ListNode()
  let currentNode = result
  while (list1 || list2) {
    let val1 = list1?.val, val2 = list2?.val
    if (!list2 || val1 < val2) {
      currentNode.val = val1
      list1 = list1.next
    } else if (!list1 || val1 >= val2) {
      currentNode.val = val2
      list2 = list2?.next
    }
    if (list1 || list2) currentNode = currentNode.next = new ListNode()
  }
  return result
};

// mergeTwoLists(
//   new ListNode(1),
//   new ListNode(1)
// )?.toString(); //?

// mergeTwoLists(
//   new ListNode(1, new ListNode(2, new ListNode(4))),
//   new ListNode(20, new ListNode(40, new ListNode(50, new ListNode(100))))
// )?.toString() //?

// mergeTwoLists(
//   new ListNode(),
//   new ListNode()
// )?.toString(); //?
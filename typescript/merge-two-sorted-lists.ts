class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null
    if (!list1) return list2
    if (!list2) return list1
    let array: number[] = []

    while (list1 || list2) {
        if (!list1) {
            array.push(list2.val)
            list2 = list2.next
            continue
        }

        if (!list2) {
            array.push(list1.val)
            list1 = list1.next
            continue
        }

        if (list1.val < list2.val) {
            array.push(list1.val)
            list1 = list1.next
        } else if (list1.val >= list2.val) {
            array.push(list2.val)
            list2 = list2.next
        }
    }

    let result = new ListNode(array[0])
    let parent = result
    for (let i = 1; i < array.length; i++) {
        result.next = new ListNode(array[i])
        result = result.next
    }

    return parent
}

console.log(mergeTwoLists(new ListNode(1), new ListNode(2, new ListNode(4))), )

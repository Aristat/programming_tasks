class NodeStack {
    value: number;
    min: number;
    next: NodeStack | null;

    constructor(value: number, min: number, next: NodeStack | null) {
        this.value = value;
        this.min = min;
        this.next = next;
    }
}

class MinStack {
    private head: NodeStack;

    push(value: number): void {
        if (this.head == null) {
            this.head = new NodeStack(value, value, null);
        } else {
            this.head = new NodeStack(value, Math.min(value, this.head.min), this.head);
        }
    }

    pop(): void {
        this.head = this.head.next;
    }

    top(): number {
        return this.head.value;
    }

    getMin(): number {
        return this.head.min;
    }
}

let minStack: MinStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
console.log(minStack.pop());
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2

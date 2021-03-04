/**
 * @file 最小栈
 * @author caixiaowen
 */

class MinStack {
    constructor() {
        this.stack = [];
        this.min = null;
    }

    push(val) {
        this.stack.push(val);

        // 这里主要不要写成 !this.min，因为存在 min=0 的情况
        if (this.min === null || this.min > val) {
            this.min = val;
        }
    }

    pop() {
        const popVal = this.stack.pop();

        if (!this.stack.length) {
            this.min = null;
        }
        else if (this.min === popVal) {
            this.min = Math.min(...this.stack);
        }
        return popVal;
    }

    top() {
        return this.stack.length ? this.stack[this.stack.length - 1] : null;
    }

    // 常数时间内获取最小值
    getMin() {
        return this.min;
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
// 返回 -3
console.log(minStack.getMin());

console.log(minStack.pop());
// 返回 0
console.log(minStack.top());
// 返回 -2
console.log(minStack.getMin());


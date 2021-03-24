/**
 * @file 用两个栈实现队列
 * @author xiaoerwen
 */

class CQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    appendTail(val) {
        this.stack1.push(val);
        return null;
    }

    deleteHead(){
        if (!this.stack2.length) {
            if (!this.stack1.length) {
                return -1;
            }
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}
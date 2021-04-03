/**
 * @file 栈排序
 * @author xiaoerwen
 */

const SortedStack = function() {
    this.list = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {
    if (!this.list.length) {
        this.list.push(val);
        return null;
    }

    let i = 0;
    let len = this.list.length;
    while (i < len) {
        if (this.list[i] >= val) {
            this.list.splice(i, 0, val);
            break;
        }
        i++;
    }

    if (this.list.length === len) {
        this.list.push(val);
    }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function() {
    if (!this.list.length) {
        return null;
    }
    this.list.shift();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {
    return this.list.length ? this.list[0] : -1;
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {
    return !this.list.length;
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
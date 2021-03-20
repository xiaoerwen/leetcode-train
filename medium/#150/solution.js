/**
 * @file 逆波兰式
 * @author caixiaowen
 */

/**
 * 思路：表达式相关的计算都可以用栈，利用栈存储前一次的结果
 * @param {*} tokens 
 */
const evalRPN = function(tokens) {
    let stack = [];
    let result;
    for (let i = 0, len = tokens.length; i < len; i++) {
        if (~'+-*/'.indexOf(tokens[i])) {
            // 表达式右边的值出栈
            let right = +stack.pop();
            // 表达式左边的值出栈
            let left = +stack.pop();
            switch(tokens[i]) {
                case '+':
                    result = left + right;
                    break;
                case '-':
                    result = left - right;
                    break;
                case '*':
                    result = left * right;
                    break;
                case '/':
                    // 除法取整数
                    result = parseInt(left / right);
                    break;
            }
            // 计算结果入栈，供下一次计算使用
            stack.push(result);
        }
        else {
            stack.push(tokens[i]);
        }
    }

    // 这里注意结果已经入栈，所以还是从栈拿，避免出现result为undefined的情况
    return stack.pop();
};

const tokens = ["4","13","5","/","+"];
console.log(evalRPN(tokens));
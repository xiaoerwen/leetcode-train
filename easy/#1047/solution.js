/**
 * @file 删除字符串的重复项
 * @author xiaoerwen
 */

const removeDuplicates = function(s) {
    if (s.length < 2) {
        return s;
    }

    let stack = [s[0]];
    let i = 1;
    let len = s.length;
    while (i < len) {
        if (stack.length && s[i] === stack[stack.length - 1]) {
            stack.pop();
            i++;
            continue;
        }
        stack.push(s[i]);
        i++;
    }

    return stack.join('');
};

let s = 'abbaca';
console.log(removeDuplicates(s));

s = 'aaaaaaa';
console.log(removeDuplicates(s));

s = 'aaaaaaaa';
console.log(removeDuplicates(s));

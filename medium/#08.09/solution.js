/**
 * @file 括号
 * @author caixiaowen
 */

const generateParenthesis = function(n) {
    if (!n) {
        return [''];
    }
    if (n === 1) {
        return ['()'];
    }

    let result = [];
    
    function addParenthesis(str, left, right, t) {
        if (right === n) {
            result.push(str);
            return;
        }

        if (left === right) {
            addParenthesis(str + '(', left + 1, right, t - 1);
            return;
        }
        if (t === 0) {
            addParenthesis(str + ')', left, right + 1, t);
            return;
        }
        if (left < right) {
            return;
        }

        addParenthesis(str + '(', left + 1, right, t - 1);
        addParenthesis(str + ')', left, right + 1, t);
    }

    addParenthesis('', 0, 0, n);

    return result;
};


console.log(generateParenthesis(3));
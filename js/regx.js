/**
 * @file 正则相关
 * @author xiaoerwen
 */

/**
 * 匹配html标签，判断当前字符串内标签是否闭合
 */
function judgeHtml(s) {
    let p = /<(?<tag>\/?\w+)\s?(?:[^>^\/]+)?(?<autoClosed>\/?)>/g;
    let matched = [...s.matchAll(p)];

    if (!matched.length) {
        return false;
    }

    let stack = [];
    matched.forEach(item => {
        if (stack.length && item.groups.tag.toLowerCase() === '/' + stack[stack.length - 1]) {
            stack.pop();
        }
        else if (item.groups.autoClosed !== '/') {
            stack.push(item.groups.tag.toLowerCase());
        }
    });
    return !stack.length;
}

let s = '<Div>abcdef</div><span>';
console.log(judgeHtml(s)); // false

s = '<img class="abc"/>';
console.log(judgeHtml(s)); // true

s = '<p class="abc">hjsls;</p><img/>sadas';
console.log(judgeHtml(s)); // true

s = '<div>111<p>abc</p></div>';
console.log(judgeHtml(s)); // true


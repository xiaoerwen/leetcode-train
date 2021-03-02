/**
 * @file 翻转字符串里的单词
 * @author caixiaowen
 */

/**
 * 运行时间84ms，内存消耗39.9MB
 * 
 * 思路：双向队列
 */
const reverseWords = function(s) {
    s = s.trim();

    if (!s.length) {
        return '';
    }

    let word = '';
    let queue = [];
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] !== ' ') {
            word+= s[i];
        }
        else if (word.length){
            queue.unshift(word);
            word = '';
        }
    }

    word.length && queue.unshift(word);

    return queue.join(' ');
};

/**
 * 很牛逼的一行代码搞定
 * 运行时间68ms，内存消耗39.3MB
 * 
 * 思路：正则+数组翻转
 */
const reverseWords = s => s.match(/\S+/g).reverse().join(' ');

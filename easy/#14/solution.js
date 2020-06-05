/**
 * @file 寻找最长公共前缀
 * @author xiaoerwen
 */

 /**
  * 思路：找出数组中最短的字符串，看是否公共前缀；如果不是，去掉末位字符，再匹配；依次类推
  *
  * @param {Array} strs 字符串数组
  * @return {string}
  */
function longestCommonPrefix1(strs) {
    if (!strs || !strs.length) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }

    // 找出数组中最短字符串
    let minLen = strs[0].length;
    let idx = 0;
    strs.map((item, index) => {
        if (item.length < minLen) {
            minLen = item.length;
            idx = index;
        }
        return item;
    });
    let p = strs.splice(idx, 1)[0];

    // 以最短字符串开始，去与别的字符串做匹配
    let len = p.length;
    let i = 0;
    while (i < len) {
        let flag = true;
        p = p.substr(0, len - i);
        for (let j = 0; j < strs.length; j++) {
            // 若其他字符串不以此字符串开头，证明非前缀
            if (strs[j].indexOf(p) !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return p;
        }
        i++;
    }
    return '';
}

/**
  * 思路2：数组两两找出其公共前缀，再去找出所有公共前缀的公共前缀
  *
  * @param {Array} strs 字符串数组
  * @return {string}
  */
function longestCommonPrefix2(strs) {
    if (!strs || !strs.length) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }

    // 找出公共前缀
    function findPrefix(a, b, isTmp = false) {
        if (!a) {
            if (isTmp) {
                return b;
            }
            return '';
        }
        if (!b) {
            if (isTmp) {
                return a;
            }
            return '';
        }

        let p = a.length < b.length ? a : b;
        let other = a.length < b.length ? b : a;
        let len = p.length;
        let i = 0;
        while (i < len) {
            let flag = true;
            p = p.substr(0, len - i);
            if (other.indexOf(p) !== 0) {
                flag = false;
            }
            if (flag) {
                return p;
            }
            i++;
        }
        return '';
    }

    let len = strs.length;
    let tmp = '';
    // 区分数组长度是奇偶
    if (len % 2 === 0) {
        for (let i = 0; i < len; i = i + 2) {
            let p = findPrefix(strs[i], strs[i + 1]);
            if (!p) {
                return '';
            }
            // 因为初始 tmp 为空，直接取首个公共前缀
            tmp = findPrefix(tmp, p, true);
            if (!tmp) {
                return '';
            }
        }
    }
    else {
        for (let i = 0; i < len - 1; i = i + 2) {
            let p = findPrefix(strs[i], strs[i + 1]);
            if (!p) {
                return '';
            }
            tmp = findPrefix(tmp, p, true);
            if (!tmp) {
                return '';
            }
        }
        // 奇数长度的数组，别忘了和最后一个字符串匹配
        tmp = findPrefix(tmp, strs[len - 1]);
    }

    return tmp;
}

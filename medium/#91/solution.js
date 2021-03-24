/**
 * @file 解码
 * @author xiaoerwen
 */

const numDecodings = s => {
    if (s.length < 2) {
        return (s !== '0') ? 1 : 0;
    }

    let len = s.length;

    let i = len - 1;

    
    if (s[i] === '0') {
        if (s[i - 1] !== '1' && s[i - 1] !== '2') {
            return 0;
        }

        return numDecodings(s.slice(0, i - 1));
    }

    let j = i - 1;

    if (s[j] === '1') {
        return numDecodings(s.slice(0, j)) + numDecodings(s.slice(0, i));
    }

    if (s[j] === '2') {
        if (+s[i] < 1 || +s[i] > 6) {
            return numDecodings(s.slice(0, i));
        }
        return numDecodings(s.slice(0, j)) + numDecodings(s.slice(0, i));
    }

    return numDecodings(s.slice(0, i));
};

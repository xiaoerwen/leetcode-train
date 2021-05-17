/**
 * @file loadash 相关操作模拟
 * @author xiaoerwen
 */

// GET
const loadashGet = (obj, keyPath, defaultValue) => {
    if (!obj || !keyPath) {
        return defaultValue;
    }

    let keys = keyPath.split(/[\.\[\]]/);
    let len = keys.length;
    let i = 0;
    while (i < len) {
        if (!keys[i]) {
            i++;
            continue;
        }
        if (!obj[keys[i]]) {
            return defaultValue;
        }
        obj = obj[keys[i++]];
    }

    return obj || defaultValue;
}

let obj = {
    a: {
        b: 123,
        c: {
            d: 'abc'
        }
    },
    d: 666,
    e: {
        f: {
            g: {
                l: 'ttt'
            }
        }
    },
    h: [
        {
            i: 'kkk'
        }
    ]
};
console.log(loadashGet(obj, 'a.b'))
console.log(loadashGet(obj, 'a.d', -1))
console.log(loadashGet(obj, 'h[0].i'))


// SET
const loadashSet = (obj, keyPath, val) => {
    let keys = keyPath.split(/[\.\[\]]/);
    let len = keys.length;
    let i = 0;
    while (i < len) {
        if (!keys[i]) {
            i++;
            continue;
        }
        if (i === len - 1) {
            obj[keys[i]] = val;
            return;
        }
        obj[keys[i]] || (obj[keys[i]] = {});
        obj = obj[keys[i++]];
    }
};
let obj = {
    a: 123
};
loadashSet(obj, 'b[0].c', 2);
console.log(obj);

/**
 * @file promise.all实现
 * @author xiaoerwen
 */

promise.prototype.all(fns => {
    if (!Array.isArray(fns)) {
        console.warn('...');
        return;
    }

    let count = 0;
    let result = [];
    return new Promise((resolve, reject) => {
        for (let i = 0, len = fns.length; i < len; i++) {
            Promise.resolve(fns[i])
                .then(res => {
                    result.push(res);
                    count++;

                    if (count === fns.length) {
                        return resolve(result);
                    }
                }, err => {
                    return reject(err);
                });
        }
    });
})
/**
 * @file promise.race实现
 * @author xiaoerwen
 */

promise.prototype.race = fns => {
    return new Promise((resolve, reject) => {
        for (let i = 0, len = fns.length; i < len; i++) {
            Promise.resolve(fns[i])
                .then(res => {
                    return resolve(res);
                }, err => {
                    return reject(err);
                });
        }
    })
};

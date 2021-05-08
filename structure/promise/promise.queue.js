/**
 * @file 实现一个promise队列，实现同步执行
 * @author xiaoerwen
 */

// const promiseQueue = function() {
//     let promises = Array.prototype.slice.call(arguments)[0];
//     let len = promises.length;

//     return new Promise((resolve, reject) => {
//         let result = [];
//         function addCallback(p, cb, count) {
//             return function() {
//                 return p().then(res => {
//                     result.push(res);
//                     if (count === len - 1) {
//                         return cb().then(res => {
//                             result.push(res);
//                             resolve(result);
//                         });
//                     }
//                     return cb();
//                 });
//             }
//         }
//         for (let j = len - 2; j >= 0; j--) {
//             promises[j] = addCallback(promises[j], promises[j + 1], j + 1);
//         }
//         return promises[0]();
//     });
// }

const promiseQueue = function(promises) {
    let len = promises.length;
    let result = new Array(len);
    return new Promise((resolve, reject) => {
        let final = promises.reduceRight((accmulator, cur, index) => {
            return function() {
                return cur().then(res => {
                    result[index] = res;
                    return accmulator();
                })
                .catch(e => {
                    reject(e)
                });
            };
        });
        final().then(res => {
            result[len - 1] = res;
            resolve(result);
        });
    })
}

const p1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p1');
        resolve('p1');
    }, 1000);
});

const p2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p2');
        resolve('p2');
    }, 1000);
});

const p3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p3');
        resolve('p3');
    }, 1000);
});

promiseQueue([p1, p2, p3]).then(res => console.log('res', res));


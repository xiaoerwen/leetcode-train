/**
 * @file 实现 promise
 * @author xiaoerwen
 * @description 参考文章 https://mp.weixin.qq.com/s/n0w67ij_UCj1OHzh7OWZmw
 */

class Promise {
    constructor(fn) {
        this.status = 'pening',
        this.value = null;
        this.reason = '';
        this.onFulFilledCb = [];
        this.onRejectedCb = [];

        function resolve(value) {
            if (this.status === 'pending') {
                // 这里为了方便，用宏任务setTimeout替代实现异步，实际上不是setTimeout
                setTimeout(() => {
                    this.status = 'fulfilled';
                    this.value = value;
                    this.onFulFilledCb.forEach(cb => {
                        cb(this.value);
                    });
                }, 0);
            }
        }

        function reject(reason) {
            if (this.status === 'pending') {
                setTimeout(() => {
                    this.status = 'rejected';
                    this.reason = reason;
                    this.onRejectedCb.forEach(cb => {
                        cb(reason);
                    });
                }, 0);
            }
        }

        try {
            fn(resolve, reject);
        }
        catch(e) {
            reject(e);
        }
    }

    then(onFulFilled, onRejected) {
        // 如果onFulFilled/onRejected不是函数，需要把promise1的状态传递下去
        onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : function(v) {return v};
        onRejected = typeof onRejected === 'function' ? onRejected : function(e) {return e};

        // then 必须返回一个promise，才可以保证在一个promise上多次调用
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === 'pending') {
                this.onFulFilledCb.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulFilled(this.value);
                            this.resolvePromise(promise2, x, resolve, reject);
                        }
                        catch(e) {
                            reject(e);
                        }
                    }, 0);
                });

                this.onRejectedCb.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason);
                            this.resolvePromise(promise2, x, resolve, reject);
                        }
                        catch(e) {
                            reject(e);
                        }
                    }, 0);
                });
            }

            if (this.status === 'fulfilled') {
                setTimeout(() => {
                    try {
                        let x = onFulFilled(this.value);
                        this.resolvePromise(promise2, x, resolve, reject);
                    }
                    catch(e) {
                        reject(e);
                    }
                }, 0);
            }

            if (this.status === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        this.resolvePromise(promise2, x, resolve, reject);
                    }
                    catch(e) {
                        reject(e);
                    }
                }, 0);
            }
        });

        return promise2;
    }

    resolvePromise(promise2, x, resolve, reject) {
        // x和promise不能指向同一个对象
        if (x === promise2) {
            return reject('...');
        }

        // 如果x是promise，那么使promise接受x的状态
        if (x instanceof Promise) {
            if (x.status === 'pending') {
                x.then(value => {
                    this.resolvePromise(promise2, value, resole, reject);
                }, reject);
            }
            else {
                x.then(resolve, reject);
            }
            return;
        }

        let called = false;
        // 如果x是对象或者函数
        if (x !== null && Object.prototype.toString.call(x) === '[object Object]' || typeof x === function) {
            try {
                let then = x.then;
                // 如果x.then存在且为函数，则把x作为函数作用域，继续执行，直到x不是对象或函数
                if (typeof then === 'function') {
                    then.call(x, y => {
                        if (called) {return;}

                        called = true;
                        this.resolvePromise(promise2, y, resolve, reject);
                    }, err => {
                        if (called) {return;}

                        called = true;
                        reject(err);
                    });
                }
                else {
                   if (called) {return;}

                   called = true;
                   resolve(x);
                }
            }
            catch(e) {
                if (called) {return;}

                called = true;
                reject(e);
            }
        }
        else {
            resolve(x);
        }
    }

    // catch其实是对then的封装，只用于接收reject的错误
    catch(onRejected) {
        return this.then(null, onRejected);
    }

    // done是用于catch方法内部出现错误时，提供一个不会出错的catch方法，结束promise链
    done() {
        this.catch(reason => {
            throw reason;
        });
    }

    // 无论then还是catch，final最终都会执行
    finally(fn) {
        return this.then(value => {
            fn();
            return value;
        }, reason => {
            fn();
            throw this.reason;
        });
    }
}
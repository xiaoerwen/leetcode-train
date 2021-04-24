/**
 * @file 实现 promise
 * @author xiaoerwen
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
        onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : function(v) {return v};
        onRejected = typeof onRejected === 'function' ? onRejected : function(e) {return e};

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
        if (x === promise2) {
            return reject('...');
        }

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
        if (x !== null && Object.prototype.toString.call(x) === '[object Object]' || typeof x === function) {
            try {
                let then = x.then;
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
}
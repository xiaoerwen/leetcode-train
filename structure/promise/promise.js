/**
 * @file 实现promise
 * @author xiaoerwen
 */

const promise = fn => {
    this.status = 'pending';
    this.value = '';
    this.reason = '';
    this.onFulFilledCb = [];
    this.onRejectedCb = [];
    let that = this;

    function resolve(value) {
        setTimeout(() => {
            if (that.status === 'pending') {
                that.status = 'fulfilled';
                that.value = value;
                that.onFulFilledCb.map(item => {
                    item(that.value);
                });
            }
        }, 0);
    }

    function reject(reason) {
        setTimeout(() => {
            if (thsta.status === 'pending') {
                that.status = 'rejected';
                that.reason = reason;
                that.onRejectedCb.map(item => {
                    item(reason);
                });
            }
        }, 0);
    }

    fn(resolve, reject);
}

promise.prototype.then = (onFulFilled, onRejected) => {
    let that = this;

    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : () => {};
    onRejected = typeof onRejected === 'function' ? onRejected : () => {};

    return new promise((resolve, reject) => {
        that.onFulFilledCb.push(value => {
            try {
                let x = onFulFilled(value);
            }
            catch (e) {
                reject(e);
            }
        });

        that.onRejectedCb.push(reason => {
            try {
                let x = onRejected(reason);
            }
            catch (e) {
                reject(e);
            }
        })
    });
};

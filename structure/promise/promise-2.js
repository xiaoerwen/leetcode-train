promise = fn => {
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
                that.onFulFilledCb.forEach(fn => {
                    fn(value);
                });
            };
        }, 0);
    }

    function reject(reason) {
        setTimeout(() => {
            if (that.status === 'pending') {
                that.status = 'rejected';
                that.reason = reason;
                that.onRejectedCb.forEach(fn => {
                    fn(reason);
                });
            }
        })
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
                resolve(x);
            }
            catch (e) {
                reject(e);
            }
        })
    })
};

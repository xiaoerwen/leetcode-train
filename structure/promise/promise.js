/**
 * @file 实现promise
 * @author xiaoerwen
 */

 function promise(fn) {
    let that = this;
    this.status = 'pending';
    this.value = '';
    this.reason = '';
    this.onFulFilledCb = [];
    this.onRejectedCb = [];

    function resolve(value) {
        //setTimeout(() => {
            if (that.status === 'pending') {
                that.status = 'fulfilled';
                that.value = value;
                that.onFulFilledCb.map(item => {
                    item(that.value);
                });
            }
        //}, 0);
    }

    function reject(reason) {
        //setTimeout(() => {
            if (that.status === 'pending') {
                that.status = 'rejected';
                that.reason = reason;
                that.onRejectedCb.map(item => {
                    item(that.reason);
                });
            }
        //}, 0);
    }

    fn(resolve, reject);
}

promise.prototype.then = function(onFulFilled, onRejected) {
    let that = this;
    console.log(that.status)

    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : function(){};
    onRejected = typeof onRejected === 'function' ? onRejected : function() {};

    return new promise((resolve, reject) => {
      console.log(that.status)
        if (that.status === 'pending') {
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
        }
        else if (that.status === 'fulfilled') {
            onFulFilled(that.value);
        }
        else {
            onRejected(that.value);
        }
        
    });
};


new promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})
.then(res => {
  console.log(res)
});

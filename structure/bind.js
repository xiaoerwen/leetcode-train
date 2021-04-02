const fakeBind = function(context) {
    if (typeof this !== 'function') {
        console.warn('not a function');
        return;
    }

    let args = Array.prototype.slice.call(arguments, 1);
    let self = this;

    return function() {
        return self.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    };
};

const a = {
    x: 42,
    getX: function() {
      return this.x;
    }
};
  
const unboundGetX = a.getX;
console.log(unboundGetX()); // undefined

  
const boundGetX = unboundGetX.bind(a);
console.log(boundGetX()); // 42

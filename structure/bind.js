const fakeBind = function(func, context, ...args) {
    if (typeof func !== 'function') {
        console.warn('not a function');
        return;
    }

    return function() {
        return func.apply(context, args);
    };
};

const a = {
    x: 42,
    getX: function() {
      return this.x;
    }
};
  
const unboundGetX = a.getX;
console.log(unboundGetX());

  
const boundGetX = fakeBind(unboundGetX, a);
console.log(boundGetX());

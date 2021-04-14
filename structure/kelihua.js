/**
 * @file 柯里化函数
 * @author xiaoerwen
 */

const foo = function() {
    let args = Array.prototype.slice.call(arguments);
    const target = function() {
        args = args.concat(Array.prototype.slice.call(arguments));
        return foo(...args);
    };
    target.getValue = () => args.reduce((x, y) => x + y, 0);
    return target;
};


let f1 = foo(1,2,3);
console.log(f1.getValue());

let f2 = foo(1)(2,3);
console.log(f2.getValue());

let f3 = foo(1)(2)(3);
console.log(f3.getValue());


const curry = function(fns) {
    let args = Array.prototype.slice.call(arguments, 1);
    let self = this;
    return function() {
        let realArgs = args.concat(Array.prototype.slice.call(arguments));
        if (realArgs.length >= fns.length) {
            return fns.apply(self, realArgs);
        }
        return curry.call(self, fns, ...realArgs);
    }
};

function sum(x, y, z) {
    return x + y + z;
}

const add = curry(sum);
console.log(add(1, 2)(3)); // 6
console.log(add(1)(2)(3)); // 6

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

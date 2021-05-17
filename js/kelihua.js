// /**
//  * @file 柯里化函数
//  * @author xiaoerwen
//  */

// const foo = function() {
//     let args = Array.prototype.slice.call(arguments);
//     const target = function() {
//         args = args.concat(Array.prototype.slice.call(arguments));
//         return foo(...args);
//     };
//     target.getValue = () => args.reduce((x, y) => x + y, 0);
//     return target;
// };


// let f1 = foo(1,2,3);
// console.log(f1.getValue());

// let f2 = foo(1)(2,3);
// console.log(f2.getValue());

// let f3 = foo(1)(2)(3);
// console.log(f3.getValue());


// const curry = function(fns) {
//     let args = Array.prototype.slice.call(arguments, 1);
//     let self = this;
//     return function() {
//         let realArgs = args.concat(Array.prototype.slice.call(arguments));
//         if (realArgs.length >= fns.length) {
//             return fns.apply(self, realArgs);
//         }
//         return curry.call(self, fns, ...realArgs);
//     }
// };

// function sum(x, y, z) {
//     return x + y + z;
// }

// const add = curry(sum);
// console.log(add(1, 2)(3)); // 6
// console.log(add(1)(2)(3)); // 6


function kelihua(fn) {
    let args = Array.prototype.slice.call(arguments, 1)
    return function() {
        let realArgs = args.concat(Array.prototype.slice.call(arguments));
        if (realArgs.length >= fn.length) {
            return fn.apply(this, realArgs);
        }
        return kelihua.call(this, fn, ...realArgs);
    }
}

const add = (x,y,z) => x+y+z;
const curryAdd = kelihua(add);
console.log(curryAdd(1)(2, 3))


function A(t) {
    this.t = t;
}

// function B(t, s) {
//     A.call(this, t);
//     this.s = s;
// }
// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = A;

// console.log(B.prototype instanceof A);


function C(t){
    let obj = Object.create(A.prototype);
    let result = A.call(obj, t);
    if (typeof result === 'object' && result !== null) {
        return result;
    }
    return obj;
}
let c = C(1);
console.log(c.t);
console.log(c instanceof A)
console.log(c.__proto__ === A.prototype)

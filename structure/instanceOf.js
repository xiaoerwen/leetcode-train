
// const fakeInstanceOf = function(obj, constructor) {
//     while (true) {
//         if (obj.__proto__ === null) {
//             return false;
//         }
//         if (obj.__proto__ === constructor.prototype) {
//             return true;
//         }
//         obj = obj.__proto__;
//     }
// }

// function C(){}
// function D(){}

// var o = new C();
// console.log(fakeInstanceOf(o, C)); // true
// console.log(fakeInstanceOf(o, D)); // false

// console.log(fakeInstanceOf(o, Object)); // true
// console.log(fakeInstanceOf(C.prototype, Object)); // true

// C.prototype = {};
// var o2 = new C();

// console.log(fakeInstanceOf(o2, C)); // true
// console.log(fakeInstanceOf(o, C)); // false

// D.prototype = new C();
// var o3 = new D();
// console.log(fakeInstanceOf(o3, D)); // true
// console.log(fakeInstanceOf(o3, C)); // true


Object.prototype.fakeInstanceOf = function(constructor) {
    let obj = this;
    while (true) {
        if (obj.__proto__ === null) {
            return false;
        }
        if (obj.__proto__ === constructor.prototype) {
            return true;
        }
        obj = obj.__proto__;
    }
}

function C(){}
function D(){}

var o = new C();


console.log(o.fakeInstanceOf.call(o, C)); // true，因为 Object.getPrototypeOf(o) === C.prototype


console.log(o.fakeInstanceOf.call(o, D)); // false，因为 D.prototype 不在 o 的原型链上

console.log(o.fakeInstanceOf.call(o, Object)); // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
console.log(C.prototype.fakeInstanceOf.call(C.prototype, Object)); // true，同上

C.prototype = {};
var o2 = new C();

console.log(o2.fakeInstanceOf.call(o2, C)); // true

console.log(o.fakeInstanceOf.call(o, C)); // false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
console.log(o3.fakeInstanceOf.call(o3, D)); // true
console.log(o3.fakeInstanceOf.call(o3, C)); // true 因为 
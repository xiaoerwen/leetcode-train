/**
 * @file 实现一个简单的消息订阅模式
 * @author caixiaowen
 */

// 发布者
class Dep {
    constructor() {
        this.subs = [];
    }

    addSubs(sub) {
        if (~this.subs.indexOf(sub)) {
            return;
        }
        this.subs.push(sub);
    }

    notify() {
        for (let i = 0, len = this.subs.length; i < len; i++) {
            this.subs[i].update();
        }
    }
}
Dep.target = null;

// 订阅者
class Watcher {
    constructor(obj, key, updateCb) {
        this.data = obj;
        this.key = key;
        this.value = null;
        this.updateCb = updateCb;
        this.get();
    }

    get() {
        Dep.target = this;
        this.value = this.data[this.key];
        Dep.target = null;
        return this.value;
    }

    update() {
        const oldValue = this.value;
        const newValue = this.get();
        this.updateCb(newValue, oldValue);
    }
}

// 观察者，数据劫持
class Observer {
    constructor(obj) {
        this.data = obj;
        if (this.data === null || typeof this.data !== 'object') {
            return;
        }
        if (Array.isArray(this.data)) {
            this.observeArray(this.data);
        }
        else {
            this.walk();
        }
    }

    observeArray(array) {
        for (let i = 0, len = array.length; i < len; i++) {
            observe(array[i]);
        }
    }

    walk() {
        for (let key of Object.keys(this.data)) {
            this.defineReactive(this.data, key);
        }
    }

    defineReactive(obj, key) {
        let val = obj[key];
        observe(val);
        const dep = new Dep();
        Object.defineProperty(obj, key, {
            get() {
                if (Dep.target) {
                    dep.addSubs(Dep.target);
                }
                return val;
            },
            set(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                observe(val);
                dep.notify();
            }
        });
    }
}

function observe(data) {
    new Observer(data);
}

// 写一个最简单的例子
const obj = {
    a: 1
};
observe(obj);
new Watcher(obj, "a", (newVal, oldVal) => {
    console.log("newVal", newVal);
    console.log("oldVal", oldVal + '\n');
});
obj.a = 2;
obj.a = 3;

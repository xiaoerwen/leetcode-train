
/**
 * @file bind、apply、call方式
 * @author xiaoerwen
 */

Function.prototype.call = function(context, ...args) {
    let fn = this;
    if (typeof fn !== 'function') {
        return;
    }

    context.fn = fn;
    return context.fn(...args);
}

Function.prototype.apply = function(context, args) {
    let fn = this;
    if (typeof fn !== 'function') {
        return;
    }

    context.fn = fn;
    return context.fn(...args);
}

Function.prototype.bind = function(context, ...args) {
    let fn = this;
    if (typeof fn !== 'function') {
        return;
    }

    return function(...args2) {
        args = args.concat(args2);
        return fn.apply(context, args);
    }
}

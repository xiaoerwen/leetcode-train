/**
 * @file 节流防抖
 * @author xiaoerwen
 */

/**
 * 防抖，即等待时间内，如果事件被再一次触发，之前的事件清空，重新计时
 *
 * @param {*} fun 
 * @param {*} wait 
 */
const debounce = (fun, wait) => {
    let timer = null;

    return function() {
        let context = this;
        let args = arguments;

        // 如果定时器已存在，清空定时器，重新开始
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        // 设定定时器
        timer = setTimeout(() => {
            fun.apply(context, args);
        }, wait);
    }
};

/**
 * 节流，即一段时间内该事件只执行一次
 *
 * @param {*} fn 
 * @param {*} wait 
 */
const throttle = (fn, wait) => {
    // 获取事件触发时的时间
    let startTime = Date.now();

    return function() {
        // 获取事件即将执行的时间
        let endTime = Date.now();
        let context = this;
        let args = arguments;

        // 如果两者相差已经超过设定的时间间隔，执行函数
        if (endTime - startTime > wait) {
            fn.apply(context, args);
            startTime = Date.now();
        }
    }
};


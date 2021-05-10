/**
 * @file js实现并发请求
 * @author xiaoerwen
 */

/**
 * 比如有好几个请求，一个个调用太慢，希望可以并发实现几个请求一起发送
 * 假设最大可并发max个请求
 * 每执行完一个请求，从任务池中再取一个并发运行，直到所有任务执行完毕，返回结果
 */

// 方法 1
function tasksQueue(tasks, max, callback) {
    let result = [];
    Promise.all(new Array(max).map(() => {
        return new Promise(resolve => {
            function runTask() {
                if (tasks.length <= 0) {
                    return resolve();
                }

                const task = tasks.shift();
                task.then(res => {
                    result.push(res);
                    runTask();
                });
            }
            runTask();
        })
    }))
    .then(() => {
        callback(result);
    });
}

// 方法 2
function tasksQueue(tasks, max, callback) {
    class TasksQueue {
        constructor(tasks, max) {
            this.tasks = tasks;
            this.maxNum = max;
            this.callback = null;
            this.running = 0;
            this.queue = [];
            this.result = [];
        }
    
        pushQueue(task) {
            this.queue.push(task);
            this.next();
        }
    
        next() {
            while (this.running < this.maxNum && this.queue.length) {
                const task = this.tasks.shift();
                task.then(res => {
                    this.result.push(res);
                })
                .finally(() => {
                    this.running--;
                    this.next();
                });
                this.running++;
            }

            if (typeof this.callback === 'function' && this.running === 0) {
                this.callback(this.result);
            }
        }
    }

    const queue = new TasksQueue(max);
    queue.callback = callback;
    tasks.forEach(task => {
        queue.pushQueue(task);
    });
}

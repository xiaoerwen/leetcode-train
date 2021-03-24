/**
 * @file LRU
 * @author xiaoerwen
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// 运行时长 304ms，内存消耗49.7MB
class LRUCache {
    constructor(capacity) {
        this.maxCacheSize = capacity;
        this.cache = new Array();
        this.keys = new Array();
    }

    get(key) {
        let idx = this.keys.indexOf(key);
        if (~idx) {
            let cached = this.cache[idx];
            this.cache.splice(idx, 1);
            this.keys.splice(idx, 1);
            this.cache.push(cached);
            this.keys.push(key);
            return cached;
        }
        return -1;
    }

    put(key, value) {
        let idx = this.keys.indexOf(key);
        if (~idx) {
            this.cache.splice(idx, 1);
            this.keys.splice(idx, 1);
        }
        this.keys.push(key);
        this.cache.push(value);
        if (this.cache.length > this.maxCacheSize) {
            this.cache.shift();
            this.keys.shift();
        }
    }
}

// 运行时长 204ms，内存消耗49.7MB
class LRUCacheAnother {
    constructor(capacity) {
        this.maxCacheSize = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (this.cache.has(key)) {
            let cached = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, cached);
            return cached;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.maxCacheSize) {
            let firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}

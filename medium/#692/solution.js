/**
 * @file 前k个高频单词
 * @author xiaoerwen
 */

const topKFrequent = function(words, k) {
    let wordMap = new Map();
    words.forEach(item => {
        if (wordMap.has(item)) {
            let count = wordMap.get(item);
            wordMap.set(item, ++count);
        }
        else {
            wordMap.set(item, 1);
        }
    });

    let mapArr = Array.from(wordMap.entries());
    mapArr.sort(function (a,b){
        if (a[1] - b[1] >= 0) {
            if (a[1] === b[1]) {
                return a[0].localeCompare(b[0]);
            }
            return -1;
        }
        return 1;
    });

    return mapArr.slice(0, k).map(item => item[0]);
};

let arr = ["i", "love", "leetcode", "i", "love", "coding"]
let k = 2
console.log(topKFrequent(arr, k))

arr = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]
k = 4
console.log(topKFrequent(arr, k))
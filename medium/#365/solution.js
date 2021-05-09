/**
 * @file 水壶问题
 * @author xiaoerwen
 */

/**
 * 思路：可以理解成求解最大公约数m，ax+by=z，z必定是m的整数倍
 *
 * @param {*} jug1Capacity 
 * @param {*} jug2Capacity 
 * @param {*} targetCapacity 
 * @return
 */
const canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
    if (jug1Capacity + jug2Capacity < targetCapacity) {
        return false;
    }

    if (jug1Capacity === 0 || jug2Capacity === 0) {
        return targetCapacity === 0 || jug1Capacity + jug2Capacity === targetCapacity;
    }

    // 求最大公约数
    function GBD(a, b) {
        let min = Math.min(a, b);
        while (min) {
            if (a % min === 0 && b % min === 0) {
                return min;
            }
            min--;
        }
        return 1;
    }

    // 判断和值是否为最大公约数的整数倍
    return targetCapacity % GBD(jug1Capacity, jug2Capacity) === 0;
};

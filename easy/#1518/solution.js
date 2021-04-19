/**
 * @file 换酒问题
 * @author xiaoerwen
 */

/**
 * 思路：已购入酒瓶兑换掉新酒后，此时先不考虑兑换的新酒，那么已经喝了的酒可以理解为购入酒-兑换剩余的酒，因为兑换剩余的酒可以和兑换后的酒再组合换取新酒
 *
 * @param {*} numBottles 已购入啤酒瓶
 * @param {*} numExchange 多少个空瓶可以兑换一瓶新酒
 * @returns 
 */
const numWaterBottles = function(numBottles, numExchange) {
    if (numBottles < numExchange) {
        return numBottles;
    }

    return numBottles - numBottles % numExchange + numWaterBottles(Math.floor(numBottles / numExchange) + numBottles % numExchange, numExchange);
};

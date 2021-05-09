/**
 * @file 验证IP地址
 * @author xiaoerwen
 */

const validIPAddress = function(IP) {
    function isIPv4(IP) {
        if (IP.indexOf('.') === -1) {
            return false;
        }

        let arr = IP.split('.');
        if (arr.length !== 4) {
            return false;
        }

        for (let i = 0; i < 4; i++) {
            if (!arr[i] || /\D+/.test(arr[i])) {
                return false;
            }

            if (arr[i].indexOf('0') === 0 && arr[i].length > 1) {
                return false;
            }

            if (isNaN(parseInt(arr[i], 10)) || +arr[i] > 255) {
                return false;
            }
        }

        return true;
    }

    function isIPv6(IP) {
        if (IP.indexOf(':') === -1) {
            return false;
        }

        let arr = IP.split(':');
        if (arr.length !== 8) {
            return false;
        }

        for (let i = 0; i < 8; i++) {
            if (!arr[i] || arr[i].length > 4 || isNaN(parseInt(arr[i], 16))) {
                return false;
            }

            if (/[G-Zg-z]+/.test(arr[i])) {
                return false;
            }
        }

        return true;
    }

    return isIPv4(IP) ? 'IPv4' : (isIPv6(IP) ? 'IPv6' : 'Neither');
};

let IP = '172.16.254.1';
console.log(validIPAddress(IP)); // IPv4

IP = '2001:0db8:85a3:0:0:8A2E:0370:7334';
console.log(validIPAddress(IP)); // IPv6

IP = '256.256.256.256';
console.log(validIPAddress(IP)); // Neither

IP = '2001:0db8:85a3:0:0:8A2E:0370:7334:'
console.log(validIPAddress(IP)); // Neither

IP = '1e1.4.5.6'
console.log(validIPAddress(IP)); // Neither

IP = "20EE:FGb8:85a3:0:0:8A2E:0370:7334";
console.log(validIPAddress(IP)) // Neither

IP = '192.0.0.1';
console.log(validIPAddress(IP)); // IPv4

/**
 * @file 设计停车系统
 * @author caixiaowen
 */

class ParkingSystem {
    constructor(big, medium, small) {
        this.parkingSize = [big, medium, small];
    }

    addCar(carType) {
        if (this.parkingSize[carType - 1]) {
            this.parkingSize[carType - 1]--;
            return true;
        }
        return false;
    }
};

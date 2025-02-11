// Code your solution in this file!
const returnFirstTwoDrivers = function(value){
    return value.slice(0,2);
}

const returnLastTwoDrivers = function(value2){
    return value2.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(number){
        return multiplier * number;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driver, driversToReturn){
    return driversToReturn(driver);
}
// Leap year rules: divisible by 4, 100 and 400 
const leapYears = function (year) {
    return (Number.isInteger(year / 4) && ( !Number.isInteger(year / 100) || Number.isInteger(year / 400)))
};

// Do not edit below this line
module.exports = leapYears;

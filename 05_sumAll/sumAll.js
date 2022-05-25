const sumAll = function (value1, value2) {
    let sum = 0;
    let intArray = [value1, value2].sort()
    
    if (value1 > 0 && value2 > 0 && Number.isInteger(value1) && Number.isInteger(value2)) {
        for (i = intArray[0]; i < intArray[1] + 1; i++) {
            sum += i;
        }
        return (sum);
    }
    else {
        return ("ERROR");
    }
}

// Do not edit below this line
module.exports = sumAll;

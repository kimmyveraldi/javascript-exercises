var removeFromArray = function(...args) {
    const originalArray = args[0];
    let resultArray = originalArray.filter(item => !args.includes(item));
    return resultArray;
}

// Do not edit below this line
module.exports = removeFromArray;

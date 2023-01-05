// const palindromes = function (str) {
//     reversedstr = str.split("").reverse().join("");
//     return reversedstr == str;
// };

const palindromes = (str) => {
    str = str.toLowerCase()
             .replace(/[^a-z]/g, "");
    reveresedstr = str.split("")
                      .reverse().join("");

    return (reveresedstr == str);
}

// Do not edit below this line
module.exports = palindromes;

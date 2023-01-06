const fibonacci = function(n) {

    if (n<0) return "OOPS";
    if (n<3) return n==0 ? 0:1

    let a=0, b=1, c=0;
    while (--n) 
        c = a+b, a=b, b=c;
    return c;
};

// Do not edit below this line
module.exports = fibonacci;

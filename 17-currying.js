

// TODO: compare this with the official solution
function curryN(fn, n) {
    var arity = n || fn.length;

    function captureArgument(args) {
        return function (singleArgument) {
            var localArgs = args.slice(0); // copy arguments
            localArgs.push(singleArgument);
            if (localArgs.length === arity) {
                return fn.apply(null, localArgs);
            } else {
                return captureArgument(localArgs);
            }
        }
    }
    return captureArgument([]);
}

module.exports = curryN


/*

// Official solution

 function curryN(fn, n) {
 n = n || fn.length
 return function curriedN(arg) {
 if (n <= 1) return fn(arg)
 return curryN(fn.bind(this, arg), n - 1)
 }
 }

 module.exports = curryN
* */


/*
My test
function add(a, b) {
    return a + b;
}
var x = curryN(add, 2)(1);
console.log(x(5));
console.log(x(6));
*/
function reduce(arr, fn, initial) {
    if (!arr.length) return initial;    // end condition
    var head = arr[0];                  // item to operate on
    var reduced = fn(initial, head);    // perform action
    var tail = arr.slice(1);            // next
    return reduce(tail, fn, reduced);   // recursive step
}

module.exports = reduce;

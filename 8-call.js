function duckCount() {
    return Array.prototype.reduce.call(arguments, function (count, item) {
        return Object.prototype.hasOwnProperty.call(item, 'quack') ? count + 1 : count;
    }, 0);
}

module.exports = duckCount

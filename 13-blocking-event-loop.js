function repeat(operation, num) {
    if (num <= 0) return;
    operation();

    if (num % 10 === 0) {
        setTimeout(function () {
            repeat(operation, --num)
        }, 0);
    } else {
        repeat(operation, --num)
    }
}

// i need some explanation here
module.exports = repeat

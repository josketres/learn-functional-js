function Spy(target, method) {
    var spy = {
        count: 0
    };
    var original = target[method];
    target[method] = function () {
        spy.count++;
        return original.apply(target, arguments);
        // QUESTION: why did the solution use this here ???
    };
    return spy;
}

module.exports = Spy;

function countWords(inputWords) {
    return inputWords.reduce(function (obj, word) {
        if (obj[word]) {
            obj[word] = obj[word] + 1;
        } else {
            obj[word] = 1;
        }
        return obj;
    }, {});
}

module.exports = countWords;

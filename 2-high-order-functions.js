function repeat(operation, num) {
	var i = 0;
	for(i = 0; i < num; i++) {
		operation();
	}
}
module.exports = repeat

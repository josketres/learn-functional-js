function loadUsers(userIds, load, done) {
    var users = [], completed = 0;
    userIds.forEach(function (userId, index) {
        load(userId, function (user) {
            users[index] = user;
            if (++completed === userIds.length) {
                return done(users);
            }
        });
    });
}
module.exports = loadUsers;

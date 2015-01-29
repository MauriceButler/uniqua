module.exports = function(a) {
    // TODO: weakmap for hash
    var seen = {};
    return a.filter(function(item) {
        return seen[item] ? false : (seen[item] = true);
    });
};
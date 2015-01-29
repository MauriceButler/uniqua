var WeakMap = require('weak-map');

function uniqua(a){
    var map = new WeakMap(),
        seen = {},
        seenNull;

    return a.filter(function(item) {
        if(item === null){
            return seenNull ? false : (seenNull = true);
        }

        if(typeof item !== 'object'){
            return seen[item] ? false : (seen[item] = true);
        }

        return map.has(item) ? false : map.set(item, true);
    });
}

module.exports = uniqua;
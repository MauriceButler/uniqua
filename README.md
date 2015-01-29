# uniqua

A sassy way to get unique items from an array

## usage

    var unquia = require('unquia'),
        foo = {foo: 'bar'},
        data = [1, foo, null, undefined, 1, foo, null, undefined],

    var result = unquia(data);

    console.log(result); // [1, 2, 3]

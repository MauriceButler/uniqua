# uniqua

A sassy way to get unique items from an array

## usage

    var uniqua = require('uniqua'),
        foo = {foo: 'bar'},
        data = [1, foo, 'bar', null, undefined, 1, foo, 'bar', null, undefined];

    var result = uniqua(data);

    console.log(result); // [1, {foo: 'bar'}, 'bar', null, undefined]

var test = require('tape'),
    unquia = require('../');

test('simple', function (t) {
    t.plan(1);

    t.deepEqual(unquia([1, 2, 3, 1, 2, 3]), [1, 2, 3], 'simple');
});

// test('objects', function (t) {
//     t.plan(1);

//     t.deepEqual(unquia([{foo: 'bar'}, {foo: 'stuff'}, {foo: 'bar'}]), [{foo: 'bar'}, {foo: 'stuff'}, {foo: 'bar'}], 'objects');
// });

// test('instances', function (t) {
//     t.plan(1);

//     var foo = {foo: 'bar'};

//     t.deepEqual(unquia([foo, {foo: 'stuff'}, foo]), [foo, {foo: 'stuff'}], 'instances');
// });
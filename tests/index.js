var test = require('tape'),
    unquia = require('../');

test('value types', function (t) {
    t.plan(1);
    var data = [1, 2, 3, 1, 2, 3],
        expected = [1, 2, 3];

    t.deepEqual(
        unquia(data),
        expected,
        'works on value types'
    );
});

test('objects', function (t) {
    t.plan(1);

    t.deepEqual(
        unquia(
            [
                {foo: 'bar'},
                {foo: 'stuff'},
                {foo: 'bar'}
            ]
        ),
        [
            {foo: 'bar'},
            {foo: 'stuff'},
            {foo: 'bar'}
        ],
        'works on objects'
    );
});

test('instances', function (t) {
    t.plan(1);

    var foo = {foo: 'bar'};

    t.deepEqual(
        unquia(
            [
                foo,
                {foo: 'bar'},
                foo
            ]
        ),
        [
            foo,
            {foo: 'bar'}
        ],
        'instances treated correctly'
    );
});

test('mixed types', function (t) {
    t.plan(1);
    var foo = {foo: 'bar'},
        data = [1, undefined, 'meh', foo, 1, undefined, 'meh', foo],
        expected = [1, undefined, 'meh', foo];

    t.deepEqual(
        unquia(data),
        expected,
        'works with mixed types'
    );
});

test('handles nulls', function (t) {
    t.plan(1);
    var foo = {foo: 'bar'},
        data = [1, foo, null, undefined, 1, foo, null, undefined],
        expected = [1, foo, null, undefined];

    t.deepEqual(
        unquia(data),
        expected,
        'handles nulls'
    );
});
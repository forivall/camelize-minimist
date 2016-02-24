# camelize-minimist

recursively transform key strings to camel-case

fork of the original substack/camelize to better operate with the results of
minimist & subarg: leaves "\_" alone.

[![build status](https://secure.travis-ci.org/substack/camelize-minimist.png)](http://travis-ci.org/substack/camelize-minimist)

# example

``` js
var camelize = require('camelize-minimist');
var obj = {
    'fee-fie-foe': 'fum',
    beep_boop: {
        _: ["zip-zap"],
        'abc.xyz': 'mno',
        'foo_bar': 'baz'
    }
};
var res = camelize(obj);
console.log(JSON.stringify(res, null, 2));
```

output:

```
{
  "feeFieFoe": "fum",
  "beepBoop": {
    "_": [
      "zip-zap"
    ],
    "abcXyz": "mno",
    "fooBar": "baz"
  }
}

```

# methods

``` js
var camelize = require('camelize')
```

## camelize(obj)

Convert the key strings in `obj` to camel-case recursively.

# install

With [npm](https://npmjs.org) do:

```
npm install camelize
```

To use in the browser, use [browserify](http://browserify.org).

# license

MIT

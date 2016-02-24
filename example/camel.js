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

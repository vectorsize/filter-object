#Filter object

Slim module to filter passed in options upon initiation.  
Born to be used with [self-init](https://github.com/vectorsize/self-init).
Takes in an object and returns a new one only contaning the allowed values:

```js
var filter = require('filter-object');
var options = {width: 200, height: 300, evil: 'muahaha!', other: 'bla'};
console.log(filter(options, ['width', 'height'])); // => {with: 200, height: 300}

```

# ObjectIt

Same as JsonIt except returns the passed object if it isn't a string

<!-- [![build status](https://secure.travis-ci.org/yieme/objit.png)](http://travis-ci.org/yieme/objit) -->

## Installation

This module is installed via npm:

```sh
npm i objit --save
```

For Command Line Interface:

```sh
npm i objit -g
```

## Examples

```js
var objit = require('objit')
objit({ op: "ok" })      // { "op": "ok" }  pass-thru
objit('ok')              // { "op": "ok" }
objit('ok', 'you')       // { "you": "ok" }
objit('say,hello:world') // { "op": "say", "hello": "world" }
```

### Change the default type of the inital assigned parameter

```js
objit('ok', 'OneTime', 'DefaultType') // { "OneTime": "ok" }
objit('ok')                           // { "DefaultType": "ok" }
objit('ok', null, 'NewType')          // { "NewType": "ok" }
```

### Command Line Interface Examples

```sh
objit --help
```

```
Same as JsonIt except returns the passed object if it isn't a string - v0.1.0
Usage: objit JsonItString [type] [--pretty]
Examples:
objit ok
{ "op": "ok" }

objit hello say
{ "say": "hello" }

objit say,hello:world --pretty
{
  "op": "say",
  "hello": "world"
}
```


## Rights

Copyright (C) 2015 by Yieme, License: MIT

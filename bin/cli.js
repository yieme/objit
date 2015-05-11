#!/usr/local/bin/node
/** Simplified jsonit which is a JSON parser that isn't strict
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     objit
 *  @param      {stream} stdin  - Standard input
 *  @return     {stream} stdout - Standard output
 */ 'use strict';
var objit = require('../index.js')


function help() {
  var pkg = require('../package.json')
  console.error(pkg.description, '- v' + pkg.version)
  console.error('Usage:', pkg.name, 'objitString [type] [--pretty]')
  console.error('Examples:')
  console.error("objit ok\n{ \"op\": \"ok\" }\n\nobjit hello say\n{ \"say\": \"hello\" }\n\nobjit say,hello:world --pretty\n{\n  \"op\": \"say\",\n  \"hello\": \"world\"\n}")
  process.exit(1)
}

var arg1 = process.argv[2]
if (!arg1 || arg1 == '--pretty' || arg1 == '--help') help()
var pretty

var arg2 = process.argv[3]
if (arg2 == '--pretty') {
  arg2 = null
  pretty = true
}

var arg3 = process.argv[4]
if (arg3 == '--pretty') {
  arg3 = null
  pretty = true
}

if (!arg2 && arg3) {
  arg2 = arg3
  arg3 = null
}

var result = objit(arg1, arg2, arg3)
if (pretty) {
  console.log(JSON.stringify(result, null, 2))
} else {
  console.log(JSON.stringify(result))
}

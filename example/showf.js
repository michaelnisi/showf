
var showf = require('../')
  , cop = require('cop')

showf(process.cwd())
  .pipe(cop(line))
  .pipe(process.stdout)

function line (str) {
  return str + '\n'
}

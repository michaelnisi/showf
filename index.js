
// showf - show filenames of changed files in latest commit

var gitgo = require('gitgo')
  , path = require('path')
  , cop = require('cop')
  , lino = require('lino')

module.exports = function (dir) {
  var opts = []
  opts.push('show')
  opts.push('--pretty=format:')
  opts.push('--name-only')

  function filter (chunk) {
    var str = trim(chunk.toString())
    return !!str ? str : undefined
  }

  return gitgo(dir, opts)
    .pipe(lino())
    .pipe(cop(filter))
}

function trim (str) {
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}


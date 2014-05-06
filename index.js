
// showf - show filenames of changed files in latest commit

module.exports = showf

function trim (str) {
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
}

var string_decoder = require('string_decoder')
  , decoder = new string_decoder.StringDecoder()
function decode (chunk) {
  return decoder.write(chunk)
}

function ignoreWhitespace (chunk) {
  var str = trim(decode(chunk))
  return !!str ? str : undefined
}

var gitgo = require('gitgo')
  , lino = require('lino')
  , cop = require('cop')

function opts () {
  return ['show', '--pretty=format:', '--name-only']
}

function showf (dir) {
  return gitgo(dir, opts())
    .pipe(lino())
    .pipe(cop(ignoreWhitespace))
}

var test = require('tap').test
  , fs = require('fs')
  , join = require('path').join
  , gitgo = require('gitgo')
  , es = require('event-stream')
  , showf = require('../')
  , dir = '/tmp/pushup-' + Math.floor(Math.random() * (1<<24))
  , spawn = require('child_process').spawn

test('setup', function (t) {
  fs.mkdirSync(dir, 0700)
  process.chdir(dir)
  t.end()
})

test('git init', function (t) {
  gitgo(dir, ['init'])
    .on('end', function () {
      t.end()
    })
    .resume()
})

test('write', function (t) {
  var file = join(dir, 'hello.js')
  fs.writeFile(file, 'console.log("Hello World!")', function (err) {
    t.ok(err ? false : true, 'write should be ok')
    t.end()
  })
})

test('git add', function (t) {
  gitgo(dir, ['add', 'hello.js'])
    .on('end', function () {
      t.end()
    })
    .resume()
})

test('git commit', function (t) {
  gitgo(dir, ['commit', '-m', '"Add hello.js"'])
    .on('end', function () {
      t.end()
    })
  .resume()
})

test('lines', function (t) {
  showf(dir)
    .pipe(es.writeArray(function (err, lines) {
      t.equals(lines.length, 1)
      //t.equals(lines.pop(), 'hello.js')
      t.end()
    })
  )
})

test('teardown', function (t) {
  t.end()
})

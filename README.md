# showf - show changed files in latest commit

The showf [Node.js](http://nodejs.org/) module shows filenames of changed files in the latest commit. 

[![Build Status](https://secure.travis-ci.org/michaelnisi/showf.png)](http://travis-ci.org/michaelnisi/showf) [![David DM](https://david-dm.org/michaelnisi/showf.png)](http://david-dm.org/michaelnisi/showf)

## Usage
   
    var showf = require('showf')
      , cop = require('cop')

    showf(process.cwd())
      .pipe(cop(function (s) { return s + '\n' }))
      .pipe(process.stdout)

### showf(dir)

The `showf` module exports a single function that returns a [Transform](http://nodejs.org/api/stream.html#stream_class_stream_transform) stream.

## Installation

Install with [npm](https://npmjs.org):

    npm install showf

[![NPM](https://nodei.co/npm/showf.png)](https://npmjs.org/package/showf)

## License

[MIT License](https://raw.github.com/michaelnisi/showf/master/LICENSE)

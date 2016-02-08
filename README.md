# hellenic-post-track [![Build Status](https://travis-ci.org/greecejs/hellenic-post-track.svg?branch=master)](https://travis-ci.org/greecejs/hellenic-post-track) [![Coverage Status](https://coveralls.io/repos/github/greecejs/hellenic-post-track/badge.svg?branch=master)](https://coveralls.io/github/greecejs/hellenic-post-track?branch=master) [![npm](https://img.shields.io/npm/v/hellenic-post-track.svg)](https://www.npmjs.com/package/hellenic-post-track)

> Track an item from [Hellenic Post (ELTA)](http://www.elta.gr).

## Installation

```sh
npm install hellenic-post-track
```

## Usage

```js
var track = require('hellenic-post-track');

track('NZ990003254GR')
  .then(console.dir)
  .catch(console.error);
```

## License

[MIT](http://opensource.org/licenses/mit-license.php)

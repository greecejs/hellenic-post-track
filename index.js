'use strict';

var rp = require('request-promise');

var API_URL = 'http://www.elta-courier.gr/track.php';
var rpElta = rp.defaults({
  method: 'POST',
  uri: API_URL,
  json: true,
  gzip: true
});

/**
 * Track an item from Hellenic Post (ELTA).
 *
 * @param {string|array} A single or a list of tracking codes.
 * @return {promise} A promise with the tracking status data.
 */
function track(trackinCodes) {
  var _trackingCodes = trackinCodes;
  if (typeof _trackingCodes === 'string') {
    _trackingCodes = [_trackingCodes];
  }
  var options = {
    form: {
      number: _trackingCodes.join('\n')
    }
  };
  return rpElta(options);
}

module.exports = track;

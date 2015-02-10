
/* global module: true, require: true, angular: true, window: true, navigator: true */
/* jshint globalstrict: true */
'use strict';

// var angular = require('angular');
require('angular');

// load bootstrap
var $ = window.jQuery = require('jquery');
require('bootstrap');

// load our compiled templates
angular.module('templates', []);
require('../temp/templates.js');

module.exports = angular.module('app.lib', [
  // 3rd party dependencies
  require('angular-ui-router'),
  // components
  require('./pages').name,
  // partials
  'templates'
])
.directive('cover', require('./cover-directive.js'))
.constant('version', require('../package.json').version);

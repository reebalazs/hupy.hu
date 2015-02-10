
/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

module.exports = [function() {
  return {
    scope: {
      src: '@'
    },
    link: function(scope, element, attrs) {
      var parent = element.parent();
      parent.css('background', 'url(' + scope.src + ')');
      parent.css('background-size', 'cover');
    }
  };
}];

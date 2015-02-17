
/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

var $ = require('jquery');

module.exports = ['$window', '$timeout', '$rootScope',
function($window, $timeout, $rootScope) {

  var elGhost, timer, offset;

  function adjustStickyPosition(scope, el, attr) {
    // measure positions
    var $w = $($window);
    var viewPortBottom = $w.scrollTop() + $w.height();
    var ghostBottom = elGhost.offset().top + elGhost.height();
    var needsToStick = ghostBottom < viewPortBottom;
    //console.log('ADJUST', needsToStick, viewPortBottom, ghostBottom);
    if (needsToStick) {
      $(el).css({
        position: 'fixed',
        bottom: 0,
      });
    } else {
      $(el).css({
        position: 'absolute',
        bottom: ''
      });
    }
  }

  function adjustStickyDelayed(scope, el, attr) {
    if (!timer) {
      adjustStickyPosition(scope, el, attr);
      // Hold off next adjustments until a delay,
      // to avoid congesting up resize.
      timer = $timeout(function() {
        // Retry after the delay.
        adjustStickyPosition(scope, el, attr);
        timer = null;
      }, 100);
    }
  }

  function link(scope, el, attr) {
    offset = $(el).offset();
    elGhost = $(el.clone(true))
      .css({
        opacity: 0,
        top: offset.top,
        left: offset.left
      })
      .insertAfter(el);
    el.css('bottom', 0);
    var f = $.proxy(adjustStickyDelayed, null, scope, el, attr);
    $($window).bind('resize', f);
    scope.$on('resize.manually', f);
    $rootScope.$on('$stateChangeSuccess', f);
    f();
  }

  return {
    link: link
  };

}];

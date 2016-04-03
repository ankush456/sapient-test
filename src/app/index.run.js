(function() {
  'use strict';

  angular
    .module('sapeint')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

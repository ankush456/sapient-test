(function() {
  'use strict';

  angular
    .module('sapeint')
    .controller('editDialogController', editDialogController);


  /** @ngInject */
  function editDialogController($scope, $mdDialog,data,editConfirm,imageUrl) {

    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.confirm = function(){
      editConfirm();
      $scope.close();
    };
    $scope.data=data;
    $scope.imageUrl=imageUrl;

  }
})();

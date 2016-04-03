(function() {
  'use strict';

  angular
    .module('sapeint')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,myService,appPopupFactory,dialogFactory) {
    var vm = this;
    vm.isSidenavOpen = false;
    $scope.items=[];
    $scope.qtnty=[];
    vm.openLeftMenu = function () {
      $mdSidenav('left').toggle();
    };
    $scope.images=[];
    $scope.totall=0;
    myService.getCartData().then(function(data) {
      //this will execute when the
      //AJAX call completes.
      $scope.cartData = data.productsInCart;
     // var sum = 0;
      /*for(var i=0;i<$scope.cartData.length;i++){
        var total= $scope.cartData[i].amount;
        var amount_saved=$scope.cartData[i].amount_saved;
        $scope.goals[i].percent=(Math.floor((amount_saved / total) * 100));
        sum += $scope.goals[i].amount_saved;
        $scope.totalGoals=$scope.goals.length;
        $scope.totalAmountSaved=sum;
      }*/
      var totalPrice=0;
      $scope.imageurl=[
        "app/components/img/P1.jpg",
        "app/components/img/T1.jpg",
        "app/components/img/T2.jpg",
        "app/components/img/T3.jpg"
      ];
      for(var i=0;i<$scope.cartData.length;i++){
        totalPrice += $scope.cartData[i].p_price;
        $scope.totalPrice=totalPrice;

      }
    });
    $scope.deleteCartFn = function() {
      $scope.cartData.splice($scope.currIndex,1);
          appPopupFactory.showSimpleToast('Item Deleted Successfully.');
    };
    $scope.deleteCart = function(ev, index) {
      $scope.currIndex = index;
      dialogFactory.showDeleteDialog({
        targetEvent: ev,
        locals: {
          deleteConfirm: $scope.deleteCartFn,
          title: 'Delete Item?',
          content: 'Are you sure you want to delete?'
        }
      });
    };
    $scope.editCartFn = function() {
      appPopupFactory.showSimpleToast('Item updated Successfully.');
    };
    $scope.editCart = function(ev, data,imageUrl) {
      $scope.currentData = data;
      $scope.imageUrl=imageUrl;
      dialogFactory.showEditDialog({
        targetEvent: ev,
        locals: {
          data:data,
          imageUrl:imageUrl,
          editConfirm: $scope.editCartFn
        }
      });
    };






  }
})();

(function(){
  'use strict'

  angular
    .module('sapeint')
    .service('myService', function($http) {
      var BASE_URL="app/components/myServices/cart.json";

      return {
        getCartData: function() {
          //since $http.get returns a promise,
          //and promise.then() also returns a promise
          //that resolves to whatever value is returned in it's
          //callback argument, we can return that.
          return $http.get(BASE_URL)
            .then(function(result) {
              return result.data;
            });
        },
        deleteItem:function(id){
          var param = [];
          if(Array.isArray(id)) {
            param = id;
          } else {
            param.push(id);
          }
          return $http.delete(BASE_URL + param)
            .then (function(result){

          })
        },
         updateCart:function(id){
         var param=id;
         return $http.put(BASE_URL)
         .then(function(result) {

         });
         }

      }

    });
})();

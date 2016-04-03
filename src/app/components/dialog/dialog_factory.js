(function() {
'use strict';
angular.module('sapeint')
.factory('dialogFactory', function ($mdDialog) {


	var defaultOptions = {
		parent: angular.element(document.body),
		clickOutsideToClose: false
	};

	/**
	 * Display any custom dialog
	 * @param  {object} options that can be passed to $mdDialog.show function
	 * can be found at https://material.angularjs.org/0.11.4/api/service/$mdDialog
	 */

  function showDialog(options) {
    // Close existing navs and menus
    angular.extend(defaultOptions, options);
    $mdDialog.show(defaultOptions);
  }

	function showDeleteDialog(options) {
		options.templateUrl = 'app/components/dialog/delete-dialog/delete-dialog.html';
		options.controller = 'deleteDialogController';
		showDialog(options);
	}

  function showEditDialog(options,data){
    options.templateUrl = 'app/components/dialog/update-cart/update-cart.html';
    options.controller = 'editDialogController';
    showDialog(options);
  }



	function closeDialog() {
		$mdDialog.hide();
	}



	return {
    showDialog: showDialog,
		closeDialog: closeDialog,
		showDeleteDialog: showDeleteDialog,
    showEditDialog:showEditDialog
	};
});
})();

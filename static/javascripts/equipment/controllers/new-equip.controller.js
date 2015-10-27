/**
* NewEquipmentController
* @namespace openlab.equipment.controllers
*/
(function () {
  'use strict';

  angular
    .module('openlab.equipment.controllers')
    .controller('NewEquipmentController', NewEquipmentController);

  NewEquipmentController.$inject = ['$rootScope', '$scope', '$route', 'Authentication', 'Snackbar', 'Equipment'];

  /**
  * @namespace NewEquipmentController
  */
  function NewEquipmentController($rootScope, $scope, $route, Authentication, Snackbar, Equipment) {
    var vm = this;

    vm.submit = submit;

    /**
    * @name submit
    * @desc Create a new Equipment
    * @memberOf openlab.equipment.controllers.NewEquipmentController
    */
    function submit() {
      $rootScope.$broadcast('equipment.added', {
        equip: vm.equip,
        lab: Authentication.getAuthenticatedAccount().id
      });

      $scope.closeThisDialog();

      Equipment.create(vm.equip, Authentication.getAuthenticatedAccount().id).then(createEquipmentSuccessFn, createEquipmentErrorFn);



      /**
      * @name createEquipmentSuccessFn
      * @desc Show snackbar with success message
      */
      function createEquipmentSuccessFn(data, status, headers, config) {
        Snackbar.show('Success! Equipment added.');
        $route.reload();
      }

      /**
      * @name createEquipmentErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createEquipmentErrorFn(data, status, headers, config) {
        $rootScope.$broadcast('equipment.added.error');
        Snackbar.error(data.error);
      }
    }
  }
})();
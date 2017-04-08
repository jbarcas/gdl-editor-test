angular.module('app.components')

  .component('modalWithTreeComponent', {
    templateUrl: 'assets/templates/modal-with-tree.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: function ($scope) {
      var $ctrl = this;

      $ctrl.selected = {};

      $ctrl.domain = {};
        
      $ctrl.items = $ctrl.resolve.items;

      $ctrl.labels = $ctrl.resolve.labels;

      $ctrl.domains = $ctrl.resolve.domains;

      $ctrl.ok = function () {
        /**
         * If no selection, do nothing
         */
        if(!$ctrl.selected.item) {
          $ctrl.cancel();
        }
        var response = {
          selectedItem: $ctrl.selected.item,
          domain: $ctrl.domain,
          type: $ctrl.selected.item.type
        }
        $ctrl.close({$value: {data: response }});
      };

      $ctrl.cancel = function () {
        $ctrl.dismiss({$value: 'cancel'});
      };

      $scope.treeOptions = {
        allowDeselect: false,
        injectClasses: {
          ul: "a1",
          li: "a2",
          liSelected: "a7",
          iExpanded: "a3",
          iCollapsed: "a4",
          iLeaf: "a5",
          label: "a6",
          labelSelected: "a8"
        }
      }

      $scope.predicate = "";

      $scope.comparator = false;

      $scope.showSelected = function(node, parent) {
        if(parent) {
          node.parent = parent;
        }
        $ctrl.selected.item = node;
      }

    }
  });
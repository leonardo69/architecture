(function () {
    'use strict';
    angular
        .module ('app.testModule')
        .directive ('tlCombobox', tlComboboxDirective);

        tlComboboxDirective.$inject = ['$window'];

    function tlComboboxDirective($window) {

        //wrap on kendo combobox
        //we can add new functions

        var directive = {
            link: link,
            restrict: 'E',           
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('directive rendered');

            //create ui control
            element.kendoDropDownList({
                dataSource: {
                  data: ["One", "Two"]
                }
              });
            
            //on change

            //set dataSource data


        }
    }

})();
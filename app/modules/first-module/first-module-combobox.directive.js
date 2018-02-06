(function () {
    'use strict';
    debugger;
    angular
        .module ('app.firstModule')
        .directive ('firstModuleCombobox', firstModuleComboboxDirective); 
   
    function firstModuleComboboxDirective() {
     
        directiveController.$inject = ['$scope'];

        function directiveController($scope){
            var vm = this; //jshint ignore:line
  
        }

        function link(scope,element,attrs){


            $(element).kendoDropDownList({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: [],//data,
                index: 0,
                change: function(e){                    
                    var myValue = this.value();
                    debugger;
                    scope.funcTy({val:myValue});                                     
                }
            });

            scope.$watch('data', function(newData){
                debugger;
                console.log(newData);
                var widget = $(element).data('kendoDropDownList');
                widget.dataSource.data(newData);              
            });
            debugger;

            



        }

        return {          
            link: link,
            restrict: 'E',
            controller: directiveController,
            scope: {
                data:"<",
                funcTy :"&",              
            },
        };
    }

} ());